import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const experiences = [
  {
    org: 'Lamont Doherty Earth Observatory, Columbia University',
    role: 'Post-doctoral Research Scientist',
  },
  {
    org: 'Kepler51 Analytics',
    role: 'Environmental/Atmospheric Scientist',
  },
  {
    org: 'Rutgers University',
    role: 'PhD',
  },
  {
    org: 'Divecha Center for Climate Change (IISc)',
    role: 'Senior Research Fellow',
  },
  {
    org: 'Indian Institute of Science (IISc)',
    role: 'Masters in Climate Science',
  },
  {
    org: 'National Institute of Technology (NITH)',
    role: 'Bachelors in Civil Engineering',
  },
];

// Slide-in + fade animation from left
const slideInVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Experience = () => (
  <section className="experience-wrapper">
    <div className="experience-label">EXPERIENCE</div>
    <div className="experience-list">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="experience-item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={index}
          variants={slideInVariant}
        >
          <div className="experience-role">{exp.role}</div>
          <div className="experience-org">{exp.org}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
