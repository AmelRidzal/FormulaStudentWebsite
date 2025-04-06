import React from 'react';

import TeamPic from '../assets/TeamPic.jpg'
import SponsorScroll from '../js/SponsorScroller'
import NewsScroller from '../js/NewsScroller'
import logo from '../assets/logoNoText.png';

import '../css/Default.css';
import '../css/News.css';
import '../css/SponsorScroller.css';




function Home() {
  return (
    <div className="App">
      <main>
        <section id="landing-section">

            <div className="slide" >
              <img src={logo} />
              <div className="overlay">
                <h1>UNSA RACING FORMULA TEAM</h1>
                <p>Motorsport in its purest form</p>
                <div className="social-icons">
                  <i className="fab fa-instagram" />
                  <i className="fab fa-linkedin" />
                  <i className="fab fa-youtube" />
                  <i className="fab fa-facebook" />
                </div>
              </div>
            </div>
            
        </section>
        <section className="about-section">
          <div className="image-container">
            <img src={TeamPic} />
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
              <img src={TeamPic} />
            </div>
          </section>

          <NewsScroller></NewsScroller>



          <section className="about-section">
            <div className="image-container">
              <img src={TeamPic} />
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
        </section>

      </main>
    </div>
  );
}

export default Home;
