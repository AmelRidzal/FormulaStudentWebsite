import React, { useEffect, useState } from 'react';
import UpdateCard from './UpdateCard';
import '../css/Collors.css';
import '../css/News.css';

function Updates() {
  const [newsletters, setNewsletters] = useState([]);
    const backendURL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    fetch(`${backendURL}/api/newsletters`)
      .then((res) => res.json())
      .then((data) => {
        setNewsletters(data);
      })
      .catch((err) => {
        console.error('Failed to fetch newsletters:', err);
      });
  }, []);

  return (
    <div className="updates-section">
      <h1 className="updates-title">Newsletter</h1>
      <div className="updates-grid">
        {newsletters.map((item, index) => (
          <UpdateCard
            key={index}
            image={`${backendURL}/newsPics/${item.image}`}

            title={item.title}
            date={item.date}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Updates;
