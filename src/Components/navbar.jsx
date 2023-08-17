import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-section">
        <Link to="/" className = "logo">Tracking Management System </Link>
      </div>
      <div className="right-section">
        <ul className="menu">
            <Link to="/home" className="menu-item">Home</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
