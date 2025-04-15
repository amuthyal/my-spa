import React, { useEffect, useState } from 'react';
import '../styles/Loader.css';

const Loader = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHide(true), 2500);
    return () => clearTimeout(timeout);
  }, []);

  if (hide) return null;

  return (
    <div className="loader-overlay">
      <svg
        className="hex-loader"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagon Path */}
        <polygon
          className="hexagon"
          points="100,20 170,60 170,140 100,180 30,140 30,60"
        />

        {/* Letter R */}
        <text
          x="100"
          y="125"
          textAnchor="middle"
          className="hex-letter"
        >
          R
        </text>
      </svg>
    </div>
  );
};

export default Loader;
