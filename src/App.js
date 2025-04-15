import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Fieldwork from './components/Fieldwork';
import Research from './components/Research';
import Contact from './components/Contact';
import Loader from './components/Loader';
import './styles/App.css';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% of section must be visible to count
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <main>
      <Loader />
        <section id="home" className="full-section"><Home /></section>
        <section id="about" className="full-section"><About /></section>
        <section id="experience" className="full-section"><Experience /></section>
        <section id="fieldwork" className="full-section"><Fieldwork /></section>
        <section id="contact" className="full-section"><Contact /></section>

      </main>
    </div>
  );
}

export default App;
