import React from 'react';
import Tilt from 'react-parallax-tilt';
import './ParallaxCard.css';

const ParallaxCard = ({ children }) => (
  <Tilt className="parallax-card" glareEnable={true} glareMaxOpacity={0.2} glareColor="#44de8e" tiltMaxAngleX={10} tiltMaxAngleY={10}>
    {children}
  </Tilt>
);

export default ParallaxCard;
