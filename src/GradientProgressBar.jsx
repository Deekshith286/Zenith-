import React from 'react';
import './GradientProgressBar.css';

const GradientProgressBar = ({ percent = 0 }) => (
  <div className="progress-gradient-bar" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
    <div
      className="progress-gradient-fill"
      style={{
        width: `${percent}%`
      }}
    ></div>
  </div>
);

export default GradientProgressBar;
