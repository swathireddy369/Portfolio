import './App.css';
import Contact from './components/contact';
import Intro from './components/intro';
import Navbar from './components/navbar';
import Experience from './components/experience';
import Project from './components/project';
import Skill from './components/skill';
import ParticleBackground from './components/ParticleBackground';

import { useState, useEffect } from 'react';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 2000); 
  }, []);
  return (
    <div className="main">
        <ParticleBackground />
        <Navbar/>
        <Intro />
        <Skill />
        <Experience />
        <Project />
        {/* <Events/> */}
        {/* <Blog/> */}
        <Contact />
    </div>
    
  );
}

export default App;
