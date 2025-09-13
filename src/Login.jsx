import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin, showSnackbar }) => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!username.trim() || !pass) {
      setError("Please enter your username and password.");
      showSnackbar && showSnackbar("Login failed: Username and password required!", "error");
      return;
    }
    setError('');
    onLogin && onLogin({ username, pass });
    showSnackbar && showSnackbar("Login successful!");
  };

  return (
    <div className="login-bg">
      <form className="login-card" autoComplete="on" onSubmit={handleSubmit} aria-label="User Login Form">
        <h2>
          <span role="img" aria-label="lock">🔒</span> Login to Zenith
        </h2>
        <input
          className="input-field"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          aria-label="Username"
          autoFocus
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={pass}
          onChange={e => setPass(e.target.value)}
          aria-label="Password"
        />
        <button className="main-btn" type="submit">
          <span role="img" aria-label="enter">➡️</span> Login
        </button>
        {error && <div className="input-error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
