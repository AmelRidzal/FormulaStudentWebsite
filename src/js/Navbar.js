import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../assets/logoNoText.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span className="logo-text">UNSA RASIST TEAM</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/pics">Picturs</Link></li>
        <li><Link to="/fbx">3D Model</Link></li>
        <li><Link to="/sponsors">Sponsors</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
