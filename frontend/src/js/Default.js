import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TeamPic from '../assets/TeamPic.jpg'
import FormulaStudentPic from '../assets/industrial_website_png.png'
import MainPic from '../assets/lum-silverstone-main.jpg'
import logo from '../assets/logoNoText.png';

import '../css/Default.css';
import '../css/News.css';
import '../css/Collors.css';
import '../css/SponsorScroller.css';

import Teammembers from './TeamMemberCard.js';
import SponsorScroll from './SponsorScroller'



function Home() {
  const navigate = useNavigate();

  const [newnewsletter, setNewsletters] = useState([]);
  const backendURL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    fetch(`${backendURL}/api/newnewsletter`)
      .then((res) => res.json())
      .then((data) => {
        setNewsletters(data);
      })
      .catch((err) => {
        console.error('Failed to fetch newnewsletter:', err);
      });
  }, []);





  return (
    <div className="App">
      <main>

        <section id="landing-section">
          <div className="landing-slide">
            <img
              src={MainPic}
              alt="Silverstone track"
              className="landing-img"
            />
            <div className="overlay">
              <h2>ABOUT US</h2>
              <h1>We’re a passionate team with<br />specialized subteams</h1>
            </div>
          </div>
        </section>





        <section id="updates-section">

          <section className="about-section">
            <div className="text-container">
              <h2 className="title">UNSA
                <span className="highlight">RACING</span>
              </h2>
              <p className="description">
                The UNSA Racing Team is a formula student team situated at the University of Sarajevo.
                Founded in 2024, our team consists of passionate students driven by a shared enthusiasm for motorsports
                and automotive innovation. Our participation in the Formula Student competition marks a significant
                milestone in our journey to apply theoretical knowledge to real-world engineering challenges.

                The student team is closely aligned with the academic goals of the University.
                Our involvement in the competition complements classroom learning by offering students the opportunity
                to apply theoretical concepts in a real-world context. Through participation in Formula Student, students
                enhance their problem-solving abilities, critical thinking skills, and technical expertise.
              </p>


            </div>
            <div className="image-container">
              <img src={TeamPic} alt="slika" />
            </div>
          </section>

          <section className="latest-news-section">
            <h2 className="section-title">Latest News</h2>
            <div className="news-cards">
              <div className="news-card">
                <img src={`${backendURL}/newsPics/${newnewsletter.image}`} alt="slika" />
                <div className="news-content">
                  <h3>{newnewsletter.title}</h3>
                  <p>{newnewsletter.description}</p>
                </div>
              </div>
            </div>
          </section>


          <section className="about-section">
            <div className="image-container">
              <img src={FormulaStudentPic} alt="slika" />
            </div>
            <div className="text-container">
              <h2 className="title">What is
                <span className="highlight">Formula Student?</span>
              </h2>
              <p className="description">
                Formula Student is a global engineering competition that challenges university students to design,
                build, and race in a formula-style event. Teams from all around the world participate in this annual
                event, showcasing their skills and knowledge in areas such as design, manufacturing, testing,
                and business presentation.

                The competition not only emphasizes the technical aspects of building a high-performance race
                car but also encourages students to develop project management and teamwork skills.
                Participants must adhere to strict rules and regulations while pushing the boundaries of
                innovation to create a competitive vehicle.
              </p>

            </div>
          </section>


          {<SponsorScroll></SponsorScroll>}
        </section>

      </main>
    </div>
  );
}

export default Home;
