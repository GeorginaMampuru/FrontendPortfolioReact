// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const projects = [
  {
    "name": "Mzamomtsha Primary School",
    "desc": "Website for a primary school to showcase the school's success, expansion, and footprint.",
    "image": "project-1",
    "category": "basicProject",
    "links": {
      "view": "https://luxury-daifuku-57e814.netlify.app/",
      "code": "https://github.com/GeorginaMampuru"
    }
  },
  {
    "name": "Financial Calculator",
    "desc": "Finance Calculator is a Python program that allows users to perform financial calculations such as investment and bond calculations. The program provides a graphical user interface (GUI) built using the Tkinter library.",
    "image": "project-2",
    "category": "basicProject",
    "links": {
      "view": "https://github.com/GeorginaMampuru",
      "code": "https://github.com/GeorginaMampuru"
    }
  },
  {
    "name": "React ChatApp",
    "desc": "The Chat Bot is an interactive application that allows users to engage in conversations with an AI-powered chatbot. It utilizes React for the front-end user interface, Node.js for the server-side logic, and Chat Engine for real-time messaging functionality.",
    "image": "project-3",
    "category": "basicProject",
    "links": {
      "view": "https://github.com/GeorginaMampuru",
      "code": "https://github.com/GeorginaMampuru"
    }
  }
];

const Projects = () => {
  return (
    <section className="work" id="work">
      <h2 className="heading"><FontAwesomeIcon icon={faLaptopCode} /> Skills & <span>Abilities</span></h2>

      <div className="container">
        <div className="row" id="skillsContainer">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <div className="project-links">
                <a href={project.links.view} target="_blank" rel="noopener noreferrer">View Project</a>
                <a href={project.links.code} target="_blank" rel="noopener noreferrer">View Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects
