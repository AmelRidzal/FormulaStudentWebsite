import React, { useState, useEffect } from 'react';

import '../css/Collors.css';
import '../css/Pictures.css';

const Pictures = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // 🚀 Change this to your live Railway backend URL
    const backendURL = 'http://localhost:3001'; 

    fetch(`${backendURL}/api/gallery`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setImages(data);
        } else {
          console.error("Image data is not an array:", data);
        }
      })
      .catch(err => console.error("Failed to load images", err));
  }, []);

  return (
    <div className="gallery-container">
      {images.map((src, index) => (
        <div key={index} className="gallery-item">
          <img src={src} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Pictures;
