// HeroSection.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './HeroSection.css';
import '../App.css';

const HeroSection = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Web Development', 'Back-End Development', 'MERN Stack Development'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typingRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="content-container">
        <div className="content">
          <h2>Hi There,<br/> I am Georgina  <span>Mampuru</span></h2>
          <p>i am into <span className="typing-text" ref={typingRef}></span></p>
          
<div className="paragraph">
  <p>
    Welcome to my portfolio! I am thrilled to have you here and I would <br />like to take this opportunity to introduce myself as a software developer. <br />I am passionate about creating innovative and efficient software solutions.
  </p>
  {/* <p>
    Throughout my career, I have had the privilege of working on various projects,<br /> each contributing to my growth as a developer. <br /> I specialize in expertise such as web development, mobile app development, data analysis. <br /> I strive to deliver high-quality code that meets both functional and aesthetic requirements.
  </p> */}
</div>
          <div className="box-container">
            <div className="box">
              <p><span>email:</span> georginamampuru@gmail.com</p>
            </div>
          </div>
          <div className="resumebtn">
          <a onClick={() => window.open('./Georgina Mampuru - CV 2023.pdf')} className="btn">
              <button>DownloadCV</button>
              {/* <i className="fas fa-chevron-right"></i> */}
            </a>
          </div>
          
          <div className="socials">
            <ul className="social-icons">
              <li>
                <a className="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/georgina-mampuru-2ab1a7103" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li> 
              <li>
                <a className="github" aria-label="GitHub" href="https://github.com/GeorginaMampuru" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img draggable="false" className="tilt" src="./profileHero.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
