import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TeamPic from '../assets/TeamPic.jpg'
import FormulaStudentPic from '../assets/industrial_website_png.png'
import MainPic from '../assets/lum-silverstone-main.jpg'
import SponsorScroll from './SponsorScroller'
import SponsorScrollV2 from './SponsorScrollerV2'
import logo from '../assets/logoNoText.png';

import '../css/Default.css';
import '../css/News.css';
import '../css/Collors.css';
import '../css/SponsorScroller.css';
import '../css/SponsorScrollerV2.css';


function Home() {



  const navigate = useNavigate();

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
              {/*<h3 className="subtitle">Udruzenje studenata Univerziteta u Sarajevu "UNSA RT"</h3>*/}
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

              <a href="/" className="more-link">
                More about us →
              </a>
            </div>
            <div className="image-container">
              <img src={TeamPic} alt="slika" />
            </div>
          </section>

          <section className="latest-news-section">
            <h2 className="section-title">Latest News</h2>
            <div className="news-cards">
              <div className="news-card">
                <img src={logo} alt="slika" />
                <div className="news-content">
                  <h3>UNSA Racing ima web stranicu</h3>
                  <p>Poslije minimalnog truda dvojice clanova ekipe za web i jednog iz sasije, web stranica je napokon sprzena</p>
                </div>
              </div>
            </div>
          </section>


          <section id="subteams" className="subteams-section">
            <div className="text">
              <p className="subteams-subtitle">WHO WE ARE</p>
              <h2 className="subteams-title">Meet our subteams</h2>
            </div>

            <div className="subteams-grid">
              {[
                {
                  title: 'POWERTRAIN',
                  icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGSKLUE2XO9JfbO7DC8w_Z3J-nfxOW4NFuKSZSNWPNVCmSIilurcBbqrmkcUnlgag3cI&usqp=CAU',
                  desc: 'Design and study of an introduction system with the help of computational fluid mechanics programs.',
                  linkto: "/subteam"
                },
                {
                  title: 'DRIVETRAIN',
                  icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGSKLUE2XO9JfbO7DC8w_Z3J-nfxOW4NFuKSZSNWPNVCmSIilurcBbqrmkcUnlgag3cI&usqp=CAU',
                  desc: 'Responsible for all the mechanisms and components used to transmit power from the engine to the driving axle.',
                  linkto: "/subteam"
                },
                {
                  title: 'SUSPENSION',
                  icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGSKLUE2XO9JfbO7DC8w_Z3J-nfxOW4NFuKSZSNWPNVCmSIilurcBbqrmkcUnlgag3cI&usqp=CAU',
                  desc: (
                    <>
                      • Maximise traction<br />
                      • Kinematics and Dynamic analysis<br />
                      • Steering analysis
                    </>
                  ),
                  linkto: "/subteam"
                },
                {
                  title: 'ELECTRONICS',
                  icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGSKLUE2XO9JfbO7DC8w_Z3J-nfxOW4NFuKSZSNWPNVCmSIilurcBbqrmkcUnlgag3cI&usqp=CAU',
                  desc: 'The subgroup electronics are responsible for development of critical electronic systems in the car.',
                  linkto: "/subteam"
                }
              ].map((item, idx) => (
                <div key={idx}
                  className="subteam-card"
                  onClick={() => navigate(item.linkto)}
                  style={{ cursor: "pointer" }}>
                  <img src={item.icon} alt={item.title} className="h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  <div className="arrow-btn">→</div>
                </div>
              ))}
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

              <a href="/" className="more-link" link="https://fs-alpeadria.com/">
                More about formula student →
              </a>
            </div>
          </section>


          {<SponsorScroll></SponsorScroll>}
        </section>

      </main>
    </div>
  );
}

export default Home;
