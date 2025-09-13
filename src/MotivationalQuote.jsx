import React, { useState } from 'react';
import './MotivationalQuote.css';

const quotes = [
  "Small steps every day lead to big results.",
  "Stay strong, the results will follow.",
  "Your only limit is you.",
  "Zenith: Reach your peak. ⭐"
];

const MotivationalQuote = () => {
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
  const newQuote = () => setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  return (
    <div className="motivational-quote" onClick={newQuote} tabIndex={0} role="region" aria-label="Motivational Quote">
      <span role="img" aria-label="sparkles" className="quote-icon">✨</span>
      {quote}
    </div>
  );
};
export default MotivationalQuote;
