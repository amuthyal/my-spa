import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Travel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useQuery, gql } from '@apollo/client';

const GET_TRAVEL_IMAGES = gql`
  query GetTravelImages {
    getTravelImages {
      url
    }
  }
`;

const Travel = () => {
  const { loading, error, data } = useQuery(GET_TRAVEL_IMAGES);
  const [index, setIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [overlayIndex, setOverlayIndex] = useState(null);

  const images = data?.getTravelImages?.map((img) => img.url) || [];

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  // Auto-slide
  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Keyboard controls for overlay
  const handleKeyDown = useCallback(
    (e) => {
      if (overlayIndex !== null) {
        if (e.key === 'ArrowRight') {
          setOverlayIndex((prev) => (prev + 1) % images.length);
        } else if (e.key === 'ArrowLeft') {
          setOverlayIndex((prev) => (prev - 1 + images.length) % images.length);
        } else if (e.key === 'Escape') {
          setOverlayIndex(null);
        }
      }
    },
    [overlayIndex, images.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (loading) return <p className="travel-loading">Loading travel images...</p>;
  if (error) return <p className="travel-error">Error loading travel images.</p>;
  if (images.length === 0) return <p className="travel-empty">No images available.</p>;

  return (
    <section id="travel" className="travel-section">
      <h2 className="travel-title">Travel</h2>
      <p className="travel-description">
        Explore snapshots from various expeditions and research campaigns around the world.
        This gallery captures the spirit of fieldwork, discovery, and collaboration.
      </p>

      <div className="travel-slider">
        <button className="nav-button left" onClick={prev}>
          <FaChevronLeft />
        </button>
        <img src={images[index]} alt={`Travel ${index + 1}`} className="travel-image" />
        <button className="nav-button right" onClick={next}>
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="dots">
        {images.slice(0, 4).map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index % 4 ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <button className="show-gallery-button" onClick={() => setShowGallery(!showGallery)}>
        {showGallery ? 'Hide Gallery' : 'Show All'}
      </button>

      {showGallery && (
        <div className="gallery-grid">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              className="gallery-thumb"
              onClick={() => setOverlayIndex(i)}
              alt={`Travel Grid ${i + 1}`}
            />
          ))}
        </div>
      )}

      {overlayIndex !== null && (
        <div className="overlay" onClick={() => setOverlayIndex(null)}>
          <img
            src={images[overlayIndex]}
            alt="Large View"
            className="overlay-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Travel;
