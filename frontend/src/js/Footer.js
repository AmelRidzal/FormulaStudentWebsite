import '../css/Footer.css';
import '../css/Collors.css';

function Footer() {
  return (
    <footer className="footer">
      <h3 >Udruzenje studenata Univerziteta u Sarajevu "UNSA RT"</h3>
      <div className="footer-content">

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@unsaracing.com</p>
        </div>

        <div className="footer-section">
          <h3>Location</h3>
          <p>University Campus, Sarajevo</p>
          <p>Faculty of Mechanical Engineering</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/unsa_racingteam/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61557404322303"><i className="fab fa-facebook"></i></a>
          </div>
        </div>

      </div>
      <p className="footer-bottom">&copy; 2025 Formula Student Team</p>
    </footer>
  );
}

export default Footer;

