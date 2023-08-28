// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import './ProjectSection.css'; // Import the CSS file for the work section
import '../App.css';

const ProjectSection = () => {
  const projects = [
    // Add your project data here
    {
      "name": "Mzamomtsha Primary School",
      "desc": "Website for a primary school...",
      "image": "/project-1.png",
      "category": "basicProject",
      "links": {
        "view": "https://luxury-daifuku-57e814.netlify.app/",
        "code": "https://github.com/GeorginaMampuru"
      }
    },
    {
      "name": "Financial Calculator",
      "desc": "Finance Calculator is a Python program...",
      "image": "/project-2.png",
      "category": "basicProject",
      "links": {
        "view": "https://github.com/GeorginaMampuru",
        "code": "https://github.com/GeorginaMampuru"
      }
    },
    {
      "name": "React ChatApp",
      "desc": "The Chat Bot is an interactive application...",
      "image": "/project-3.png",
      "category": "basicProject",
      "links": {
        "view": "https://github.com/GeorginaMampuru",
        "code": "https://github.com/GeorginaMampuru"
      }
    }
  ];

  return (
    <section className="work">
      <h2 className="heading"><FontAwesomeIcon icon={faLaptopCode} /> Existing Projects</h2>

      <div className="box-container">
        {projects.map((project, index) => (
          <div className="box" key={index}>
            <img src={project.image} alt={project.name} />
            <div className="content">
              <div className="tag">
                <h3>{project.name}</h3>
              </div>
              <div className="desc">
                <p>Webstite For A Primary School To Showcase The Schools Success And Expasion And Footprint</p>
                <div className="btns">
                  <a href={project.links.view} target="_blank" rel="noopener noreferrer" className="btn">
                    <span>View</span>
                    <i className="fas fa-chevron-right"></i>
                  </a>
                  <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="btn">
                    <span>Code</span>
                    <i className="fas fa-chevron-right"></i>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
