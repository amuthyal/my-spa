import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import profileImg from '../assets/profile.png'; // replace with your actual image path

const About = () => {
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
        <h2 className="about-title">A Little Bit About Me</h2>
        <p>
          I’m a glacial hydrologist and Post-doctoral Research Scientist at Columbia University's Lamont Doherty Earth Observatory, 
          where my work centers on understanding the complex dynamics of glacial hydrology across the Greenland and Antarctic ice sheets. 
          My research integrates field-based hydrometeorological observations, remote sensing, and regional climate modeling to uncover the drivers of streamflow, 
          energy balance, and seasonal change on the ice.
        </p>
        <p>
          From exploring how microbial communities influence sediment transport and surface albedo on supraglacial streams, 
          to using self-organizing maps to track atmospheric river moisture transport, I’m passionate about using data-driven approaches to study cryospheric systems. 
          I've also led remote sensing campaigns—leveraging UAV and satellite imagery—to investigate the seasonal evolution of weathering crust in southwest Greenland.
        </p>
        <p>
          Before academia, I worked as an Environmental/Atmospheric Scientist at Kepler51 Analytics, 
          where I focused on high-resolution hydrometeorological forecasting. 
          There, I combined large-scale climate datasets with modeling tools to deliver actionable insights to clients, 
          bridging the gap between scientific analysis and real-world impact.
        </p>
        <p>
          At the core of my work is a commitment to advancing our understanding of climate change 
          and its cascading effects on Earth's polar systems and society at large.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
