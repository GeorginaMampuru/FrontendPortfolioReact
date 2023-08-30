// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar'; 
import HeroSection from './components/HeroSection'// Assuming the Navbar component is in a separate file called "Navbar.jsx"
import ProjectSection from './components/ProjectSection'
import SkillsSection from './components/SkillsSection'
import Education from './components/Education'
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
    <Education />
    </div>
  );
};

export default App;
