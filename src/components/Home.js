import React from 'react';
import '../styles/Home.css';
import bgImage from '../assets/IMG_E2226.jpeg'; // Used in CSS background

const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="home-overlay">
        <div className="home-content">
          <h1>Rohi Muthyala, Ph.D</h1>
          <p>Glacial Hydrologist</p>
          <p>Lamont-Doherty Earth Observatory</p>
          <p>Columbia University</p>
        </div>
        <div className="scroll-indicator" onClick={scrollToAbout}>
          ⌄
        </div>
      </div>
    </div>
  );
};

export default Home;
