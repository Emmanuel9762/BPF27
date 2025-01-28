// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import AnimatedStats from './components/AnimatedStats';
import GetInvolved from './components/GetInvolved';
import LogoCarousel from './components/LogoCarousel';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <LogoCarousel />
      <FeaturedProjects />
      <AnimatedStats />
      <GetInvolved />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

