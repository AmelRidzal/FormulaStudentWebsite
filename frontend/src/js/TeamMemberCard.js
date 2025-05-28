import React from 'react';
import '../css/Collors.css';
import '../css/TeamMemberCard.css';

function TeamMemberCard({ image, hoverImage, name, age, collage, description, contact, memberfrom }) {
    const accomplishments = description.split('\n');

    return (
        <div className="card-container">
            <div className="card-inner">
                {/* FRONT: Grayscale Image with Name */}
                <div className="card-front">
                    <img src={`${process.env.REACT_APP_BACKEND_URL}${image}`} alt={`${name} grayscale`} className="card-image grayscale" />
                    <div className="member-name-overlay">{name}</div>
                </div>

                {/* BACK: Color Image + Info Panel */}
                <div className="card-back">
                    <img src={`${process.env.REACT_APP_BACKEND_URL}${hoverImage || image}`} alt={`${name} hover`} className="card-image color" />
                    <div className="card-info">
                        <p className='text'>
                            <strong>Member from:</strong>{memberfrom}<br />
                            <strong>College:</strong> {collage}<br />
                            <strong>Contact:</strong> {contact}<br />
                            <strong>Worked on and accomplishments:</strong>
                        </p>
                        <ul>
                            {accomplishments.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}




export default TeamMemberCard;
