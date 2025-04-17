import React, { useEffect, useState } from 'react';
import UpdateCard from './UpdateCard';

import '../css/Collors.css';
import '../css/News.css';

function Updates() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const loadNewsletters = async () => {
      try {
        const response = await fetch('/api/news');
        if (!response.ok) throw new Error('Failed to fetch newsletters');
        const data = await response.json();
        setUpdates(data);
      } catch (error) {
        console.error('Error loading newsletters:', error);
      }
    };

    loadNewsletters();
  }, []);

  return (
    <div className="updates-section">
      <h1 className="updates-title">Newsletter</h1>
      <div className="updates-grid">
        {updates.map((update, index) => (
          <UpdateCard
            key={index}
            image={update.image}
            title={update.title}
            date={update.date}
            description={update.description}
          />
        ))}
      </div>
    </div>
  );
}
//<UpdateCard image={"/newsletters/01.01.2025/image.jpg"}></UpdateCard>
export default Updates;
