import React, { useState } from 'react';
import './AvatarGenerator.css';

const names = ["zenith", "joy", "health", "energy", "sky"];
const colorSets = [["#44de8e", "#eafdff"], ["#ffe477", "#fffae0"], ["#fbc02d", "#baffca"]];

const AvatarGenerator = ({ username }) => {
  // Use user's name as seed for reproducible "random" result
  const seed = username ? username.length : Math.floor(Math.random() * names.length);
  const initials = username ? username.slice(0,2).toUpperCase() : names[seed%names.length].slice(0,2).toUpperCase();
  const colors = colorSets[seed % colorSets.length];

  return (
    <div
      className="avatar-gen"
      style={{
        background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`
      }}
      role="img"
      aria-label="User Avatar"
    >
      {initials}
    </div>
  );
};

export default AvatarGenerator;
