import React from 'react';
import '../css/updates.css';

function UpdateCard({ image, title, date, description }) {
  return (
    <div className="update-card">
      <img src={image} alt={title} className="update-image" />
      <h2>{title}</h2>
      <em>{date}</em>
      <p>{description}</p>
      <button className="view-content-button">View content ➔</button>
    </div>
  );
}

export default UpdateCard;