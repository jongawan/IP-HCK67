//import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/world-news" className="nav-link">World News</Link>
        </li>
        <li className="nav-item">
          <Link to="/indonesian-news" className="nav-link">Indonesian News</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
