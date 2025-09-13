import React, { useEffect } from 'react';
import './Snackbar.css';

const Snackbar = ({ message, type = "success", duration = 2200, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose && onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div
      className={`snackbar snackbar-${type}`}
      role="alert"
      aria-live="assertive"
    >
      {type === "success" && <span className="snackbar-emoji" role="img" aria-label="success">⭐</span>}
      {type === "error" && <span className="snackbar-emoji" role="img" aria-label="error">❗</span>}
      {message}
    </div>
  );
};

export default Snackbar;
