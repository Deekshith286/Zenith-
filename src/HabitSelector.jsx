import React, { useState } from 'react';
import ParallaxCard from './ParallaxCard';
import './HabitSelector.css';

const HabitSelector = ({ habitType, addHabit, showSnackbar }) => {
  const [habitInput, setHabitInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitInput.trim()) {
      setError('Please enter a habit.');
      return;
    }
    const habitsToAdd = habitInput.split(',').map(h => h.trim()).filter(Boolean);
    if (habitsToAdd.length === 0) {
      setError('Please enter at least one valid habit.');
      return;
    }
    habitsToAdd.forEach(name => {
      addHabit({ name, type: habitType, completed: 0, total: 1 });
    });
    showSnackbar && showSnackbar('Habits added successfully!', 'success');
    setHabitInput('');
    setError('');
  };

  return (
    <ParallaxCard>
      <form className="habit-selector-card" onSubmit={handleSubmit} aria-label="Add Habit Form">
        <h3>Add a {habitType} Habit</h3>
        <input
          className="input-field"
          placeholder={`Enter one or more ${habitType} habits, separated by commas`}
          value={habitInput}
          onChange={e => setHabitInput(e.target.value)}
          aria-label="Add habit input"
        />
        <button className="main-btn" type="submit">Add / Add Many</button>
        <div className="addmany-tip">
          <span role="img" aria-label="info" className="icon-tip">📝</span>
          Tip: Use commas to add multiple habits. <i>Pushups, Squats, Plank</i>
        </div>
        {error && <div className="input-error" role="alert">{error}</div>}
      </form>
    </ParallaxCard>
  );
};

export default HabitSelector;
