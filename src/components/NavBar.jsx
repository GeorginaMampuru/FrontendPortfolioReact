// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Navbar.css';
import './mediaqueries.css';
import '../App.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <a href="/" className="logo">
        Georgina | Mampuru
      </a>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <nav className="dropdown-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Tech Stack</a></li>
            <li><a href="#work">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </nav>
      )}

      <div className="contact-button">
        <button>Contact Me</button>
      </div>
    </header>
  );
};

export default Navbar;
