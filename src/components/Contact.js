import React from 'react';
import '../styles/Contact.css';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const iconLinks = [
  { href: 'https://github.com/your-profile', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://www.instagram.com/rohi_muthyala/', icon: <FaInstagram />, label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/rohi-muthyala/', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'mailto:rohi.muthyala.91@gmail.com', icon: <FaEnvelope />, label: 'Email' },
];

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h4 className="contact-subtitle">What's Next?</h4>
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-text">
        I'm actively exploring new collaborations and always open to connecting!
        Feel free to reach out if you have any questions, or just want to say hello—
        I’ll do my best to respond!
      </p>
      <motion.a
        href="mailto:rohi.muthyala.91@gmail.com"
        className="say-hello-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Say Hello
      </motion.a>

      <div className="social-icons">
        {iconLinks.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 250 }}
            aria-label={item.label}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Contact;
