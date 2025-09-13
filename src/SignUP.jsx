import React, { useState } from 'react';
import './SignUp.css';

const roles = [
  { name: "Student", icon: "👨‍🎓" },
  { name: "Trainer", icon: "🏋️" },
  { name: "Admin", icon: "🛡️" }
];

const SignUp = ({ onSignUp, showSnackbar }) => {
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (!role) {
      setError("Please select a role!");
      showSnackbar && showSnackbar("Sign up failed: Select a role!", "error");
      return;
    }
    setError('');
    onSignUp && onSignUp(role);
    showSnackbar && showSnackbar(`Signed up as ${role}!`, "success");
  };

  return (
    <div className="signup-bg">
      <div className="signup-card" aria-label="Sign Up Card">
        <h2>
          <span role="img" aria-label="star">⭐</span> Sign Up to Zenith
        </h2>
        <div className="btn-group" role="group" aria-label="Select Role">
          {roles.map(r => (
            <button
              key={r.name}
              className={role === r.name ? "active-btn" : "choice-btn"}
              onClick={() => setRole(r.name)}
              aria-pressed={role === r.name}
            >
              <span className="role-icon" role="img" aria-label={r.name}>{r.icon}</span>
              {r.name}
            </button>
          ))}
        </div>
        <button className="main-btn" onClick={handleSignUp}>
          <span role="img" aria-label="rocket">🚀</span> Continue
        </button>
        {error && <div className="input-error">{error}</div>}
      </div>
    </div>
  );
};

export default SignUp;
