import React from 'react';

import '../css/Collors.css';
import '../css/TeamMemberCard.css';

function TeamMemberCard({ image, name, age, collage, description, contact }) {
    const accomplishments = description.split('\n');

    return (
        <div className="teammember-card">
            <h3 className="text-xl font-bold mb-2 text-left">{name}, {age}</h3>
            <img src={image} alt={name} className="teammember-image" />
            <p className="text-xl font-bold mb-2 text-left">College: {collage}</p>
            <p className="text-xl font-bold mb-2 text-left">Contact: {contact}</p>
            <div className="text-left">
                <p className="text-xl font-bold mb-1">Accomplishments:</p>
                <ul className="list-disc list-inside">
                    {accomplishments.map((item, index) => (
                        <li key={index} className="mb-1">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TeamMemberCard;
