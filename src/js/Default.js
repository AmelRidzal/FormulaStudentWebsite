import React from 'react';

import TeamPic from '../assets/TeamPic.jpg'
import SponsorScroll from '../js/SponsorScroller'
import NewsScroller from '../js/NewsScroller'

import '../css/Default.css';
import '../css/News.css';
import '../css/SponsorScroller.css';

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


const sponsors = [
  "https://1000logos.net/wp-content/uploads/2020/08/SolidWorks-Logo.png",
  "https://1000logos.net/wp-content/uploads/2021/04/Pirelli-logo.png",
  "https://1000logos.net/wp-content/uploads/2020/08/SolidWorks-Logo.png",
  "https://1000logos.net/wp-content/uploads/2020/08/SolidWorks-Logo.png",
  "https://1000logos.net/wp-content/uploads/2020/08/SolidWorks-Logo.png",
  "https://1000logos.net/wp-content/uploads/2020/08/SolidWorks-Logo.png",
];

const sponsorLogos = [...sponsors, ...sponsors];


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
