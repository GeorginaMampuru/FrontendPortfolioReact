// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar'; 
import HeroSection from './components/HeroSection'// Assuming the Navbar component is in a separate file called "Navbar.jsx"
import ProjectSection from './components/ProjectSection'
import SkillsSection from './components/SkillsSection'
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
    </div>
  );
};

export default App;
