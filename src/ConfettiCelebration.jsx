import React from 'react';
import Confetti from 'react-confetti';

const ConfettiCelebration = ({ active }) => (
  active ? <Confetti numberOfPieces={300} recycle={false} /> : null
);

export default ConfettiCelebration;
