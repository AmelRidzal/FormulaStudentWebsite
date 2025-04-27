import React, { useState, useEffect } from 'react';
import '../css/Collors.css';
import '../css/Pictures.css';

const Pictures = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const backendURL = process.env.REACT_APP_BACKEND_URL;
    console.log(backendURL);

    fetch(`${backendURL}/api/gallery`)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched images:', data);
        if (Array.isArray(data)) {
          setImages(data);
        } else {
          console.error("Image data is not an array:", data);
        }
      })
      .catch(err => console.error("Failed to load images", err));
  }, []);

  const formatUrl = (src) => {
    if (src.startsWith('http')) {
      return src;
    } else {
      return `https://${src}`;
    }
  };

  return (
    <div className="gallery-container">
      {images.map((src, index) => (
        <div key={index} className="gallery-item">
          <img src={formatUrl(src)} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Pictures;
