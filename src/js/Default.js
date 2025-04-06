import React from 'react';
import '../css/Default.css';
import UpdateCard from './UpdateCard';
import '../css/updates.css';

const slides = [
  {
    image: 'https://pbs.twimg.com/media/FYvVUxBXwAEHu4l.jpg:large', 
    title: 'UNSA RACING FORMULA TEAM',
    subtitle: 'Motorsport in its purest form'
  },
  {
    image: 'https://images.ansys.com/is/image/ansys/acceleration-run?wid=955&fmt=webp&op_usm=0.9,1.0,20,0&fit=constrain,0',
    title: 'BUILDING THE FUTURE',
    subtitle: 'Shaping tomorrow’s engineers through motorsport'
  },
  {
    image: 'https://www.staffs.ac.uk/image-library/news/article-images/formula-student-2024.x8e3b6980.jpg',
    title: 'PURE PASSION',
    subtitle: 'Where technology meets competition'
  }
];


function Home() {
  return (
    <div className="App">
      <main>
        <section id="landing-section">
        {slides.map((slide, index) => (
        <div className="slide" key={index}>
          <img src={slide.image} alt={`Slide ${index}`} />
          <div className="overlay">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <div className="social-icons">
              <i className="fab fa-instagram" />
              <i className="fab fa-linkedin" />
              <i className="fab fa-youtube" />
              <i className="fab fa-facebook" />
            </div>          
          </div>
        </div>
        ))}
        </section>
        <section id="about-section">
          <p>ABOUT</p>
        </section>
        <section id="updates-section">
          <div className='updates-header'>
            <h1 className="updates-title">Newsletter</h1>
            <button>IDI NA UPDATES</button>
          </div>
  
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
          </div>
        </section>
        <section id="contact-section">
          <p>CONTACT</p>
        </section>
      </main>
    </div>
  );
}

export default Home;
