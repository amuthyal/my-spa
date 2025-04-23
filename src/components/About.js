import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { motion } from 'framer-motion';
import '../styles/About.css';
import profileImg from '../assets/profile.png';

const GET_ABOUT = gql`
  query GetAbout {
    getAbout {
      title
      paragraphs
    }
  }
`;

const About = () => {
  const { loading, error, data } = useQuery(GET_ABOUT);

  if (loading) return <p className="about-loading">Loading...</p>;
  if (error) return <p className="about-error">Error loading about section.</p>;

  const { title, paragraphs } = data.getAbout;

  return (
    <section className="about-container">
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, rotate: 1 }}
      >
        <img src={profileImg} alt="Profile" />
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="about-title">{title}</h2>
        {paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
