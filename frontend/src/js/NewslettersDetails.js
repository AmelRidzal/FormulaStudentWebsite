import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/News.css';
import '../css/Collors.css';

function NewslettersDetails() {
  const { id } = useParams();
  const backendURL = process.env.REACT_APP_BACKEND_URL;
  const [newsletter, setNewsletter] = useState([]);

  useEffect(() => {
    fetch(`${backendURL}/api/newsletters/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setNewsletter(data);
      })
      .catch((err) => {
        console.error('Failed to fetch newsletters:', err);
      });
  }, []);

  //return <div className="updates-section"><p>Loading... ${id}  {newsletter}</p></div>;

  return (
    <div className="updates-section newsletter-detail-container">
      <h1 className="updates-title">{newsletter.title}</h1>
      <em className="newsletter-detail-date">{newsletter.date}</em>
      <img
        src={`${backendURL}/newsPics/${newsletter.image}`}
        alt={newsletter.title}
        className="newsletter-detail-image"
      />
      <p className="newsletter-detail-description">{newsletter.description}</p>
      <div className="newsletter-detail-content">{newsletter.content}</div>
    </div>
  );
}

export default NewslettersDetails;
