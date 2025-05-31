import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/News.css';
import '../css/Collors.css';

function NewslettersDetails() {
  const { id } = useParams();
  const backendURL = process.env.REACT_APP_BACKEND_URL;
  const [newsletter, setNewsletter] = useState(null);

  useEffect(() => {
    fetch(`${backendURL}/api/newsletters/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setNewsletter(data);
      })
      .catch((err) => {
        console.error('Failed to fetch newsletters:', err);
      });
  }, [id]);

  if (!newsletter) {
    return <div className="updates-section"><p>Loading...</p></div>;
  }

  const images = Array.isArray(newsletter.image) ? newsletter.image : [newsletter.image];

  return (
    <div className="updates-section newsletter-detail-container">
      <h1 className="updates-title">{newsletter.title}</h1>
      <em className="newsletter-detail-date">{newsletter.date}</em>

      {/* Main (first) image */}
      {images.length > 0 && (
        <img
          src={`${backendURL}/newsPics/${images[0]}`}
          alt={newsletter.title}
          className="newsletter-detail-image"
        />
      )}

      <p className="newsletter-detail-description">{newsletter.description}</p>
      <div className="newsletter-detail-content">{newsletter.content}</div>

      {/* Additional images */}
      {images.length > 1 && (
        <div className="newsletter-detail-gallery">
          <h3>Još fotki:</h3>
          <div className="newsletter-gallery-grid">
            {images.slice(1).map((img, index) => (
              <img
                key={index}
                src={`${backendURL}/newsPics/${img}`}
                alt={`Additional ${index + 1}`}
                className="newsletter-gallery-image"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NewslettersDetails;
