import React from 'react';
import './FabButton.css';

const FabButton = ({ onClick }) => (
  <button className="fab-btn" onClick={onClick} aria-label="Add Habit">
    +
  </button>
);

export default FabButton;
