import React from 'react';

import '../css/Collors.css';
import '../css/Subteam.css';
import Teammembers from './TeamMemberCard.js'

import TheBoys from '../assets/baby.jpg';
import AmelHover from '../assets/amel.jpg';
import EdisHover from '../assets/edis.jpg';
import BenjoHover from '../assets/benjo.jpg';

function Subteam() {
    const member1 = {
        image: TheBoys,
        name: "Ridzal Amel",
        age: "23",
        collage: "Electrotehnicki fakultet Sarajevo",
        accomplishments: "Website design and development \nECU immo disabling  \nChassie design",
        contact: "amelridzal37@gmail.com"
    };
    const member2 = {
        image: TheBoys,
        name: "Jasarevic Edis",
        age: "23",
        collage: "Electrotehnicki fakultet Sarajevo",
        accomplishments: "Website design and development",
        contact: "jasarevic03@gmail.com"
    };
    const member3 = {
        image: TheBoys,
        name: "Uzunovic Benjamin",
        age: "23",
        collage: "Electrotehnicki fakultet Sarajevo",
        accomplishments: "Website design and development \nTelemetry design and development",
        contact: "buzunovic1@etf.unsa.ba"
    };

    return (
        <>
            {/* Navbar for switching teams */}
            <nav className="subteamNavbar">
                <ul className="nav-links">
                    <li><button >Sasija</button></li>
                    <li><button >Motor</button></li>
                    <li><button >Elektronika</button></li>
                    <li><button >Ovjes</button></li>
                </ul>
            </nav>


            {/* Subteam member grid */}
            <section id="teammember" className="teammember">
                <div className="teammember-grid">
                    <div className="cards-wrapper">
                        <Teammembers
                            image={member1.image}
                            hoverImage={AmelHover}
                            name={member1.name}
                            age={member1.age}
                            collage={member1.collage}
                            description={member1.accomplishments}
                            contact={member1.contact}
                        />
                        <Teammembers
                            image={member2.image}
                            hoverImage={EdisHover}
                            name={member2.name}
                            age={member2.age}
                            collage={member2.collage}
                            description={member2.accomplishments}
                            contact={member2.contact}
                        />
                        <Teammembers
                            image={member3.image}
                            hoverImage={BenjoHover}
                            name={member3.name}
                            age={member3.age}
                            collage={member3.collage}
                            description={member3.accomplishments}
                            contact={member3.contact}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Subteam;
