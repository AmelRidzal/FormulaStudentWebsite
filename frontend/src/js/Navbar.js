import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoNoText.png';

import '../css/Navbar.css';
import '../css/Collors.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
          <span className="logo-text">UNSA RACING TEAM</span>
        </div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/news" onClick={() => setMenuOpen(false)}>News</Link></li>
        <li><Link to="/subteam" onClick={() => setMenuOpen(false)}>Subteams</Link></li>
        <li><Link to="/pics" onClick={() => setMenuOpen(false)}>Pictures</Link></li>
        <li><Link to="/3dmodel" onClick={() => setMenuOpen(false)}>3D Model</Link></li>
        <li><Link to="/sponsors" onClick={() => setMenuOpen(false)}>Sponsors</Link></li>
      </ul>

      <div className="navbar-right">
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => {
  setMenuOpen(!menuOpen);
  console.log("hamburger clicked");
}}

        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
