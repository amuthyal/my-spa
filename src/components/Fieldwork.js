import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Fieldwork.css';

import antarctica1 from '../assets/antarctica1.jpg';
import antarctica2 from '../assets/antarctica2.jpg';
import antarctica3 from '../assets/antarctica3.jpg';
import antarctica4 from '../assets/antarctica4.jpg';
import antarctica5 from '../assets/antarctica5.jpg';
import alaska1 from '../assets/alaska1.jpg';
import greenland1 from '../assets/greenland1.jpg';
import greenland2 from '../assets/greenland2.jpg';
import greenland3 from '../assets/greenland3.jpg';
import greenland4 from '../assets/greenland4.jpg';
import greenland5 from '../assets/greenland5.jpg';
import greenland6 from '../assets/greenland6.jpg';
import greenland7 from '../assets/greenland7.jpg';
import greenland8 from '../assets/greenland8.jpg';
import greenland9 from '../assets/greenland9.jpg';
import greenland10 from '../assets/greenland10.jpg';
import greenland11 from '../assets/greenland11.jpg';
import greenland12 from '../assets/greenland12.jpg';
import greenland13 from '../assets/greenland13.jpg';
import greenland14 from '../assets/greenland14.jpg';
import greenland15 from '../assets/greenland15.jpg';
import greenland16 from '../assets/greenland16.jpg';
import adirondacks1 from '../assets/adirondacks1.jpg';
import adirondacks2 from '../assets/adirondacks2.jpg';
import montclair1 from '../assets/montclair1.jpg';

const fieldworkData = [
  {
    title: 'Nov 2024 – Flask Glacier, Antarctica',
    description: `8 weeks of fieldwork studying ice flow and the impact of surface melt at high spatiotemporal resolutions. Tasks: GNSS systems for ice velocity, mass balance using AWS, seismometers for lake drainage, ApRES radar deployment, UAV imagery for DEM generation, density measurements, and snow samples for microplastics.`,
    images: [antarctica1, antarctica5, antarctica3, antarctica4, antarctica2],
  },
  {
    title: 'June 2024 – Juneau, Alaska',
    description: `3 weeks with JIRP testing a fixed wing drone (Wingtra) in extreme conditions to prep for Antarctic Peninsula. Also trained in field safety, crevasse rescue, rope/harness management, snow machine use, and first aid.`,
    images: [alaska1],
  },
  {
    title: 'June 2019 – Kangerlussuaq, Greenland',
    description: `10 weeks studying supraglacial/proglacial streamflow, weathering crust hydrology, sediment transport, and meteorology. Led aerial imagery collection and conducted hydraulic conductivity tests, cryoconite hole surveys.`,
    images: [greenland10, greenland13, greenland12, greenland11, greenland14],
  },
  {
    title: 'July 2018 – Kangerlussuaq, Greenland',
    description: `3 weeks studying supraglacial/proglacial streamflow, hydraulic conductivity, albedo, and UAV imagery of catchment.`,
    images: [greenland6, greenland8, greenland7, greenland9, greenland5],
  },
  {
    title: 'July 2017 – Kangerlussuaq, Greenland',
    description: `2 weeks focused on supraglacial/proglacial streamflow and weather station meteorology.`,
    images: [greenland3, greenland15, greenland4, greenland16],
  },
  {
    title: 'Feb 2017 – Adirondacks, New York',
    description: `3 days with Rutgers Hydroclimatology group collecting snow hydrology data: snow pits, density, conductivity, depth, and metamorphosis.`,
    images: [adirondacks1, adirondacks2],
  },
  {
    title: 'June 2016 – Kangerlussuaq, Greenland',
    description: `4 weeks studying supraglacial/proglacial streamflow, discharge, ablation, stream incision, temperature, and weather station readings.`,
    images: [greenland1, greenland2],
  },
  {
    title: 'Oct 2015 – Montclair University, New Jersey',
    description: `4 days of hydrometeorological observations and albedo measurements.`,
    images: [montclair1],
  }
];

export default function Fieldwork() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const openModal = (imgSrc) => setModalImage(imgSrc);
  const closeModal = () => setModalImage(null);

  return (
    <section id="fieldwork" className="fieldwork-section">
      <h2 className="fieldwork-heading">Field Campaigns</h2>
      <p className="fieldwork-subheading">A log of my field research and expeditions across the globe.</p>

      <div className="accordion">
        {fieldworkData.map((item, index) => {
          const isOpen = index === expandedIndex;

          return (
            <motion.div
              key={index}
              className="accordion-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                <span>{item.title}</span>
                <motion.span
                  className="arrow"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? '▲' : '▼'}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="accordion-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p>{item.description}</p>
                    <div className="image-gallery">
                      {item.images.map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt={`${item.title}-img-${idx}`}
                          className="field-image"
                          onClick={() => openModal(src)}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <img
            src={modalImage}
            alt="Modal view"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
