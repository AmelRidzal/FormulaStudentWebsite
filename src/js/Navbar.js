import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import FbxViewer from '../js/FbxViewer';
import Default from './Default.js'
import Picturs from './Picturs.js'
import Update from './Updates.js'

const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/upd">Update</Link></li>
          <li><Link to="/pics">Picturs</Link></li>
          <li><Link to="/fbx">3D Model</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;

