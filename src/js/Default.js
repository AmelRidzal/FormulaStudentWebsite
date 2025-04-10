import React from 'react';

import TeamPic from '../assets/TeamPic.jpg'
import Jesa from '../assets/JESA.jpg'
import MainPic from '../assets/lum-silverstone-main.jpg'
import SponsorScroll from '../js/SponsorScroller'
import logo from '../assets/logoNoText.png';

import '../css/Default.css';
import '../css/News.css';
import '../css/Collors.css';
import '../css/SponsorScroller.css';




function Home() {
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
              <h3 className="subtitle">University of Sarajevo</h3>
              <h2 className="title">
                UNSA <span className="highlight">RACING</span>
              </h2>
              <p className="description">
                Our team, the "UNSA RACING" of the University of Sarajevo, was founded in February 2025. Since then, our team has grown to around 70 members, representing a wide variety of disciplines, including mechanical engineering, computer science, electrical engineering, industrial engineering, business administration, information technology and design, biomedical engineering, architecture, and hearing acoustics. Our primary goal is to build a new racing car for the upcoming competitions. This car will be built according to the specifications of "Formula Student," the largest international design competition for students. We are driven not only by our fascination with racing, but also by an incredible team spirit, which contributes significantly to the individual development of each team member and their development into true experts in their field.
              </p>
              <a href="#" className="more-link">
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
                  desc: 'Design and study of an introduction system with the help of computational fluid mechanics programs.'
                },
                {
                  title: 'DRIVETRAIN',
                  icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGSKLUE2XO9JfbO7DC8w_Z3J-nfxOW4NFuKSZSNWPNVCmSIilurcBbqrmkcUnlgag3cI&usqp=CAU',
                  desc: 'Responsible for all the mechanisms and components used to transmit power from the engine to the driving axle.'
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
                  )
                },
                {
                  title: 'ELECTRONICS',
                  icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGSKLUE2XO9JfbO7DC8w_Z3J-nfxOW4NFuKSZSNWPNVCmSIilurcBbqrmkcUnlgag3cI&usqp=CAU',
                  desc: 'The subgroup electronics are responsible for development of critical electronic systems in the car.'
                }
              ].map((item, idx) => (
                <div key={idx} className="subteam-card">
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
              <img src={Jesa} alt="slika" />
            </div>
            <div className="text-container">
              <h3 className="subtitle">University of Sarajevo</h3>
              <h2 className="title">
                UNSA <span className="highlight">RACING</span>
              </h2>
              <p className="description">
                Our team, the "UNSA RACING" of the University of Sarajevo, was founded in February 2025. Since then, our team has grown to around 70 members, representing a wide variety of disciplines, including mechanical engineering, computer science, electrical engineering, industrial engineering, business administration, information technology and design, biomedical engineering, architecture, and hearing acoustics. Our primary goal is to build a new racing car for the upcoming competitions. This car will be built according to the specifications of "Formula Student," the largest international design competition for students. We are driven not only by our fascination with racing, but also by an incredible team spirit, which contributes significantly to the individual development of each team member and their development into true experts in their field.
              </p>
              <a href="#" className="more-link">
                More about us →
              </a>
            </div>
          </section>


          <SponsorScroll></SponsorScroll>
        </section>

      </main>
    </div>
  );
}

export default Home;
