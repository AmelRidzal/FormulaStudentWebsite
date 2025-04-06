import React from 'react';
import '../css/Updates.css';
import UpdateCard from './UpdateCard';

function Updates() {
  return (
    <div className="updates-section">
      <h1 className="updates-title">Newsletter</h1>

      <div className="updates-grid">
        <UpdateCard
          image="https://www.datocms-assets.com/53444/1668448307-formula-student-aixtreme-racing-team.jpg?auto=format&fit=max&w=1024"
          title="Newsletter December 2024"
          date="01.01.2025"
          description="Discover the progress and events of December!"
        />
        <UpdateCard
          image="https://www.datocms-assets.com/53444/1668448307-formula-student-aixtreme-racing-team.jpg?auto=format&fit=max&w=1024"
          title="Newsletter November 2024"
          date="01.12.2024"
          description="Discover the progress and events of November!"
        />
        <UpdateCard
          image="https://www.datocms-assets.com/53444/1668448307-formula-student-aixtreme-racing-team.jpg?auto=format&fit=max&w=1024"
          title="Newsletter October 2024"
          date="01.11.2024"
          description="Discover the progress and events of October!"
        />
        <UpdateCard
          image="https://www.datocms-assets.com/53444/1668448307-formula-student-aixtreme-racing-team.jpg?auto=format&fit=max&w=1024"
          title="Newsletter December 2024"
          date="01.01.2025"
          description="Discover the progress and events of December!"
        />
        <UpdateCard
          image="https://www.datocms-assets.com/53444/1668448307-formula-student-aixtreme-racing-team.jpg?auto=format&fit=max&w=1024"
          title="Newsletter November 2024"
          date="01.12.2024"
          description="Discover the progress and events of November!"
        />
        <UpdateCard
          image="https://www.datocms-assets.com/53444/1668448307-formula-student-aixtreme-racing-team.jpg?auto=format&fit=max&w=1024"
          title="Newsletter October 2024"
          date="01.11.2024"
          description="Discover the progress and events of October!"
        />
      </div>
    </div>
  );
}

export default Updates;
