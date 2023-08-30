// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Education.css'; 
import '../App.css';// Make sure to import your CSS file for styling

const EducationSection = () => {
  return (
    <section className="education" id="education">
      <h1 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <div className="image">
            <img draggable="false" src="./download.png" alt="" />
          </div>
          <div className="content">
            <h3>CPUT</h3>
            <p>BET: Computer Engineering</p>
            <h4>2024 | In Progress</h4>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img draggable="false" src="./download.png" alt="" />
          </div>
          <div className="content">
            <h3>CPUT</h3>
            <p>ND: Computer Systems</p>
            <h4>2020 | Completed</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
