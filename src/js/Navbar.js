import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/upd">Updates</Link></li>
          <li><Link to="/pics">Picturs</Link></li>
          <li><Link to="/fbx">3D Model</Link></li>
          <li><Link to="/sponsors">Sponsors</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;

