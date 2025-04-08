import { Link } from 'react-router-dom';
import logo from '../assets/logoNoText.png';

import '../css/Navbar.css';
import '../css/Collors.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
          <span className="logo-text">UNSA RACING TEAM</span>
        </div>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/pics">Picturs</Link></li>
        <li><Link to="/fbx">3D Model</Link></li>
        <li><Link to="/sponsors">Sponsors</Link></li>
        </ul>
  <div className="navbar-right" /> {/* Empty div to balance the left side */}
</nav>
  );
};

export default Navbar;
