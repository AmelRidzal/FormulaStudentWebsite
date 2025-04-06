import React from 'react';
import '../css/Default.css';
import UpdateCard from './UpdateCard';
import '../css/News.css';
import TeamPic from '../assets/TeamPic.jpg'

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

        <section id="sponsors-section">
          <h2 className="sponsors-title">Our Sponsors</h2>
          <div class="sponsor-slider-wrapper">
            <div class="sponsor-slider slide-1">
              <div class="item">
                <a href="#">
                  <img src="https://www.pngarts.com/files/3/Logo-PNG-Image-Background.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="https://logodownload.org/wp-content/uploads/2020/10/garena-logo.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="https://pngimg.com/uploads/nike/nike_PNG12.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="http://assets.stickpng.com/images/585990234f6ae202fedf28cf.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="https://logos-world.net/wp-content/uploads/2021/02/Sky-Logo.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="https://purepng.com/public/uploads/large/purepng.com-disney-logologobrand-logoiconslogos-251519939495wtv86.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Arena_of_Valor_logo.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="https://www.pngall.com/wp-content/uploads/2016/06/Superman-Logo-Free-Download-PNG.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="https://blackpinkupdate.com/wp-content/uploads/2020/06/BLACKPINK-Logo-PNG-Transparent-Black.png" alt="img" />
                </a>
              </div>
            </div>
            <div class="sponsor-slider slide-2">
              <div class="item">
                <a href="#">
                  <img src="https://www.pngarts.com/files/3/Logo-PNG-Image-Background.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="https://logodownload.org/wp-content/uploads/2020/10/garena-logo.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="https://pngimg.com/uploads/nike/nike_PNG12.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="http://assets.stickpng.com/images/585990234f6ae202fedf28cf.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="https://logos-world.net/wp-content/uploads/2021/02/Sky-Logo.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="https://purepng.com/public/uploads/large/purepng.com-disney-logologobrand-logoiconslogos-251519939495wtv86.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Arena_of_Valor_logo.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="https://www.pngall.com/wp-content/uploads/2016/06/Superman-Logo-Free-Download-PNG.png" alt="img" />
                </a>
              </div>
              <div class="item">
                <a href="#">
                  <img src="https://blackpinkupdate.com/wp-content/uploads/2020/06/BLACKPINK-Logo-PNG-Transparent-Black.png" alt="img" />
                </a>
              </div>
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
              <img src={TeamPic} />
            </div>
          </section>

          <section id="news-section">
            <h2 className="news-title">News</h2>
            <div class="news-slider-wrapper">
              <div class="news-slider slide-1">
                <div class="item">
                  <a href="#">
                    <UpdateCard
                      image="https://www.datocms-assets.com/53444/1668448307-formula-student-aixtreme-racing-team.jpg?auto=format&fit=max&w=1024"
                      description="Engine finally started"
                    />
                  </a>
                </div>
                <div class="item">
                  <a href="#">
                    <UpdateCard
                      image="https://www.datocms-assets.com/53444/1668448307-formula-student-aixtreme-racing-team.jpg?auto=format&fit=max&w=1024"
                      description="Engine finally started"
                    />
                  </a>
                </div>
                <div class="item">
                  <a href="#">
                    <UpdateCard
                      image="https://www.datocms-assets.com/53444/1668448307-formula-student-aixtreme-racing-team.jpg?auto=format&fit=max&w=1024"
                      description="Engine finally started"
                    />
                  </a>
                </div>
                <div class="item">
                  <a href="#">
                    <UpdateCard
                      image="https://www.datocms-assets.com/53444/1668448307-formula-student-aixtreme-racing-team.jpg?auto=format&fit=max&w=1024"
                      description="Engine finally started"
                    />
                  </a>
                </div>
                <div class="item">
                  <a href="#">
                    <UpdateCard
                      image="https://www.datocms-assets.com/53444/1668448307-formula-student-aixtreme-racing-team.jpg?auto=format&fit=max&w=1024"
                      description="Engine finally started"
                    />
                  </a>
                </div>
                <div class="item">
                  <a href="#">
                    <UpdateCard
                      image="https://www.datocms-assets.com/53444/1668448307-formula-student-aixtreme-racing-team.jpg?auto=format&fit=max&w=1024"
                      description="Engine finally started"
                    />
                  </a>
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
        </section>

      </main>
    </div>
  );
}

export default Home;
