import React from 'react';
import Shell from './components/Shell';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Shell>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Shell>
  );
}

export default App;
