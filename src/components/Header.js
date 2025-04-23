import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import RMLogo from "./RMLogo";
import '../styles/Header.css';

const GET_HEADER_CONFIG = gql`
  query GetHeaderConfig {
    getHeaderConfig {
      siteTitle
      sections
      resumeUrl
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [atTop, setAtTop] = useState(true);

  const { loading, error, data } = useQuery(GET_HEADER_CONFIG);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  // Setup section observer logic after data is loaded
  useEffect(() => {
    if (!data) return;

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

    data.getHeaderConfig.sections.forEach((id) => {
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
  }, [data]);

  if (loading || error || !data) return null;

  const { siteTitle, sections, resumeUrl } = data.getHeaderConfig;

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
                href={resumeUrl}
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
          <div className="close-icon" onClick={toggleMenu}>✕</div>
          <h2 className="mobile-title">{siteTitle}</h2>
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
                href={resumeUrl}
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
