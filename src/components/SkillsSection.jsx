// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import './SkillsSection.css';
import '../App.css';

const SkillsSection = () => {
  const skillsData =[
    {
        "name": "ReactJS",
        "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        "name": "ExpressJS",
        "icon": "https://img.icons8.com/fluency/48/000000/node-js.png"
    },
    {
        "name": "NodeJS",
        "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
    },

  
    {
        "name": "Bootstrap",
        "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
    },
   
    {
        "name": "HTML5",
        "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        "name": "CSS",
        "icon": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        "name": "JavaScript",
        "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
        "name": "Java",
        "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
    },
   
    {
        "name": "Python",
        "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
    },
   
    
    {
        "name": "MySQL",
        "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
   
   
   
    {
        "name": "Netlify",
        "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
    },
   
    {
        "name": "jQuery",
        "icon": "https://img.icons8.com/ios-filled/48/1169ae/jquery.png"
    },
    {
        "name": "Git VCS",
        "icon": "https://img.icons8.com/color/48/000000/git.png"
    },
    {
        "name": "GitHub",
        "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
    },
    {
        "name": "WordPress",
        "icon": "https://img.icons8.com/color/48/000000/wordpress.png"
    }    
];

  return (
    <section className="skills" id="skills">
      <h2 className="heading"><FontAwesomeIcon icon={faLaptopCode} /> Skills & <span>Abilities</span></h2>

      <div className="container">
        <div className="row" id="skillsContainer">
          {skillsData.map((skill, index) => (
            <div className="col-md-3 col-6 skill" key={index}>
              <div className="skill-icon">
                <img src={skill.icon} alt={`${skill.name} icon`} />
              </div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
