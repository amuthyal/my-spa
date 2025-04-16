import React, { useState, useEffect } from 'react';
import RMLogo from "./RMLogo";
import '../styles/Header.css';

const sections = ['about', 'experience', 'fieldwork', 'research', 'travel','contact'];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const home = document.getElementById('home');
    const homeObserver = new IntersectionObserver(
      ([entry]) => {
        setAtTop(entry.isIntersecting);
        if (entry.isIntersecting) setActive('');
      },
      { threshold: 0.6 }
    );
    if (home) homeObserver.observe(home);

    return () => {
      observer.disconnect();
      homeObserver.disconnect();
    };
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`header ${atTop ? 'transparent' : 'scrolled'}`}>
        <div className="logo" onClick={scrollToHome} style={{ cursor: 'pointer' }}>
          <RMLogo size={40} />
        </div>

        <nav className="desktop-nav">
          <ul className="nav-links">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={active === section && !atTop ? 'active' : ''}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf" // Replace with your actual resume path or URL
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="close-icon" onClick={toggleMenu}>
            ✕
          </div>
          <h2 className="mobile-title">ROHI MUTHYALA</h2>
          <ul className="mobile-links">
            {sections.map((section) => (
              <li key={section}>
                <a href={`#${section}`} onClick={toggleMenu}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
