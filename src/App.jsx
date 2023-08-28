// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar'; 
import HeroSection from './components/HeroSection'// Assuming the Navbar component is in a separate file called "Navbar.jsx"
import Projects from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <Projects />
    </div>
  );
};

export default App;
