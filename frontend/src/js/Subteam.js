import React, { useState, useEffect } from 'react';

import '../css/Collors.css';
import '../css/Subteam.css';
import Teammembers from './TeamMemberCard.js';

const SUBTEAMS = [
  "Chassie", "Aerodinamics", "Suspension", "Powertrain", "Electronics",
  "Software", "Marketing", "Management", "Statics"
];

function Subteam() {
  const [members, setMembers] = useState([]);
  const [currentTeam, setCurrentTeam] = useState('');

  const handleClick = async (team) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/subteam/${team}`);
      const data = await res.json();
      setMembers(data);
    } catch (err) {
      console.error('Error fetching team:', err);
    }
  };

  // Load a random subteam on initial render
  useEffect(() => {
    const randomTeam = SUBTEAMS[Math.floor(Math.random() * SUBTEAMS.length)];
    handleClick(randomTeam);
  }, []);

  return (
    <>
      <nav className="subteamNavbar">
        <ul className="nav-links">
          {SUBTEAMS.map(team => (
            <li key={team}>
              <button onClick={() => handleClick(team)}>{team}</button>
            </li>
          ))}
        </ul>
      </nav>

      <section id="teammember" className="teammember">
  <div className="cards-wrapper">
    {members.map((m, idx) => (
      <Teammembers
        key={idx}
        image={`/memberPics/${m.image}`}
        hoverImage={`/memberPics/${m.hoverImage || m.image}`}
        name={m.name}
        age={m.age}
        memberfrom={m.memberfrom}
        collage={m.college}
        description={m.accomplishments}
        contact={m.contact}
      />
    ))}
  </div>
</section>

    </>
  );
}

export default Subteam;
