import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Collors.css';
import '../css/News.css';

function NewsCard({ id, image, title, date, description }) {
  return (
    <Link to={`/news/${id}`} className="update-card-link">
      <div className="update-card">
        <img src={image} alt={title} className="update-image" />
        <h2>{title}</h2>
        <em>{date}</em>
        <p>{description}</p>
        <button className="view-content-button">View content ➔</button>
      </div>
    </Link>
  );
}

export default NewsCard;
