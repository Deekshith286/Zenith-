import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Dashboard from './Dashboard';
import Snackbar from './Snackbar';
import ConfettiCelebration from './ConfettiCelebration';

import './App.css';

function App() {
  const [authStep, setAuthStep] = useState('signup'); // 'signup', 'login', 'dashboard'
  const [user, setUser] = useState(null);
  const [snackbar, setSnackbar] = useState({ message: '', type: 'success' });
  const [confetti, setConfetti] = useState(false);

  // Show snackbar anywhere in the app
  const showSnackbar = (message, type = 'success') => {
    setSnackbar({ message, type });
  };

  // Confetti trigger, e.g., after signup/login/habit achievement
  const showConfetti = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 2200);
  };

  const handleSignUp = role => {
    setUser({ username: '', role });
    showSnackbar("Signed up successfully! Now login.", "success");
    showConfetti();
    setAuthStep('login');
  };

  const handleLogin = ({ username }) => {
    setUser(prev => ({ ...prev, username }));
    showSnackbar(`Welcome, ${username}!`, "success");
    showConfetti();
    setAuthStep('dashboard');
  };

  return (
    <div className="app-main-bg">
      <header className="app-header">
        <h1>
          <span role="img" aria-label="star">🌟</span> Zenith
        </h1>
        <span className="tagline">Track, Compete, and Stay Healthy!</span>
      </header>
      <ConfettiCelebration active={confetti} />
      <Snackbar
        message={snackbar.message}
        type={snackbar.type}
        onClose={() => setSnackbar({ ...snackbar, message: '' })}
      />
      <main className="app-card-center">
        {authStep === 'signup' && <SignUp onSignUp={handleSignUp} showSnackbar={showSnackbar} />}
        {authStep === 'login' && <Login onLogin={handleLogin} showSnackbar={showSnackbar} />}
        {authStep === 'dashboard' && user && <Dashboard user={user} showSnackbar={showSnackbar} />}
      </main>
    </div>
  );
}

export default App;
