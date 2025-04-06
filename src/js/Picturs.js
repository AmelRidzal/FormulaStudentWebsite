// src/js/Pictures.js
import React from 'react';
import '../css/Pictures.css';

const NUM_IMAGES = 10; // total number of images
const IMAGE_FOLDER = '/images/gallery'; // inside public/

const Pictures = () => {
  const images = Array.from({ length: NUM_IMAGES }, (_, i) => `${IMAGE_FOLDER}/photo${i + 1}.jpg`);

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
