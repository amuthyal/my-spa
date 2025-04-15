import React from 'react';

const RMLogo = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  
    <polygon
      points="100,20 170,60 170,140 100,180 30,140 30,60"
      stroke="#111"
      strokeWidth="8"     
      fill="none"
    />


    <text
      x="100"
      y="128"
      textAnchor="middle"
      fontFamily="'Inter', sans-serif"
      fontSize="68"
      fontWeight="700"    
      fill="#111"
    >
      R
    </text>
  </svg>
);

export default RMLogo;
