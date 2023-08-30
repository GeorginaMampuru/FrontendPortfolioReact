// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Navbar.css';
import './mediaqueries.css';
import '../App.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isActive, setIsActive] = useState(false);
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isAboutActive, setIsAboutActive] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isSkillActive, setIsSkillActive] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isProjectActive, setIsProjectActive] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <a href="/" className="logo">
        Georgina | Mampuru
      </a>

      <nav className={`navbar ${menuOpen ? 'nav-toggle' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Teck   Stack</a></li>
          <li><a href="#work">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
      </nav>

      <nav className={`navbar ${isActive ? 'open' : ''}`}>
        <ul>
          <li>
            <a className={isHomeActive ? 'active' : ''} href="#home" onClick={() => setIsHomeActive(true)}>
             
            </a>
          </li>
          <li>
            <a className={isAboutActive ? 'active' : ''} href="#about" onClick={() => setIsAboutActive(true)}>
             
            </a>
          </li>
          <li>
            <a className={isSkillActive ? 'active' : ''} href="#skill" onClick={() => setIsHomeActive(true)}>
             
            </a>
          </li>
          <li>
            <a className={isAboutActive ? 'active' : ''} href="#education" onClick={() => setIsAboutActive(true)}>
             
            </a>
          </li>
        </ul>
      </nav>

      <div className="contact-button">
        <button>Contact Me</button>
      </div>

      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Navbar;
