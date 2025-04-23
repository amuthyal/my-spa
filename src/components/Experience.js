import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const GET_EXPERIENCES = gql`
  query GetExperiences {
    getExperiences {
      org
      role
    }
  }
`;

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

const Experience = () => {
  const { loading, error, data } = useQuery(GET_EXPERIENCES);

  if (loading) return <p className="experience-loading">Loading...</p>;
  if (error) return <p className="experience-error">Error loading experience data.</p>;

  return (
    <section className="experience-wrapper">
      <div className="experience-label">EXPERIENCE</div>
      <div className="experience-list">
        {data.getExperiences.map((exp, index) => (
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
};

export default Experience;
