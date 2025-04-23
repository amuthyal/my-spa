import React from 'react';
import '../styles/Contact.css';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useQuery, gql } from '@apollo/client';
import { motion } from 'framer-motion';

const GET_CONTACT = gql`
  query GetContact {
    getContact {
      title
      subtitle
      links {
        label
        icon
        url
      }
    }
  }
`;

const iconMap = {
  FaGithub: <FaGithub />,
  FaInstagram: <FaInstagram />,
  FaLinkedin: <FaLinkedin />,
  FaEnvelope: <FaEnvelope />,
};

const Contact = () => {
  const { loading, error, data } = useQuery(GET_CONTACT);

  if (loading) return <p className="contact-loading">Loading contact info...</p>;
  if (error) return <p className="contact-error">Error loading contact info.</p>;

  const { title, subtitle, links } = data.getContact;

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="contact-title">{title}</h2>
      <p className="contact-subtitle">{subtitle}</p>
      <div className="contact-icons">
        {links.map((link, idx) => (
          <a key={idx} href={link.url} target="_blank" rel="noreferrer" aria-label={link.label}>
            {iconMap[link.icon]}
          </a>
        ))}
      </div>
    </motion.section>
  );
};

export default Contact;
