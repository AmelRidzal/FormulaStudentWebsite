import React, { useEffect, useState } from 'react';
import UpdateCard from './UpdateCard';
import NewsImage from '../assets/news.jpg';

import '../css/Collors.css';
import '../css/News.css';

function Updates() {

  const news1 = {
    image: NewsImage,
    title: "News from january",
    date: "23.1.2025",
    description: "Description from january",
  };
  const news2 = {
    image: NewsImage,
    title: "News from february",
    date: "23.2.2025",
    description: "Description from february",
  };
  const news3 = {
    image: NewsImage,
    title: "News from march",
    date: "23.3.2025",
    description: "Description from march",
  };
  const news4 = {
    image: NewsImage,
    title: "News from april",
    date: "23.4.2025",
    description: "Description from april",
  };

  return (
    <div className="updates-section">
      <h1 className="updates-title">Newsletter</h1>
      <div className="updates-grid">
        <UpdateCard
          image={news1.image}
          title={news1.title}
          date={news1.date}
          description={news1.description}
        />
        <UpdateCard
          image={news2.image}
          title={news2.title}
          date={news2.date}
          description={news2.description}
        />
        <UpdateCard
          image={news3.image}
          title={news3.title}
          date={news3.date}
          description={news3.description}
        />
        <UpdateCard
          image={news4.image}
          title={news4.title}
          date={news4.date}
          description={news4.description}
        />
      </div>
    </div>
  );
}
//<UpdateCard image={"/newsletters/01.01.2025/image.jpg"}></UpdateCard>
export default Updates;
