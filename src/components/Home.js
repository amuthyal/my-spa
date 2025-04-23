import React from 'react';
import { useQuery, gql } from '@apollo/client';
import '../styles/Home.css';

const GET_HOME = gql`
  query GetHome {
    getHome {
      name
      title
      organization
      affiliation
      backgroundImage
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_HOME);

  if (loading) return <p className="home-loading">Loading...</p>;
  if (error) return <p className="home-error">Error loading home content.</p>;

  const { name, title, organization, affiliation, backgroundImage } = data.getHome;

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="home-overlay">
        <div className="home-content">
          <h1>{name}</h1>
          <p>{title}</p>
          <p>{organization}</p>
          <p>{affiliation}</p>
        </div>
        <div className="scroll-indicator" onClick={scrollToAbout}>
          ⌄
        </div>
      </div>
    </div>
  );
};

export default Home;
