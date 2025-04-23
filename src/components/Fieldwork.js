import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Fieldwork.css';

const GET_FIELDWORK = gql`
  query GetFieldwork {
    getFieldwork {
      title
      description
      images
    }
  }
`;

export default function Fieldwork() {
  const { loading, error, data } = useQuery(GET_FIELDWORK);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const openModal = (imgSrc) => setModalImage(imgSrc);
  const closeModal = () => setModalImage(null);

  if (loading) return <p className="fieldwork-loading">Loading fieldwork...</p>;
  if (error) return <p className="fieldwork-error">Error loading fieldwork data.</p>;

  return (
    <section id="fieldwork" className="fieldwork-section">
      <h2 className="fieldwork-heading">Field Campaigns</h2>
      <p className="fieldwork-subheading">A log of my field research and expeditions across the globe.</p>

      <div className="accordion">
        {data.getFieldwork.map((item, index) => {
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
