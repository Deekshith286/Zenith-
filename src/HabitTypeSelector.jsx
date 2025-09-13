import React from 'react';
import ParallaxCard from './ParallaxCard';
import './HabitTypeSelector.css';

const habitTypeSuggestions = {
  "Activity": "Evening walk for 20 mins",
  "Diet": "Eat a fruit daily",
  "Workout": "Morning Yoga Session",
  "Meditation": "5 minutes mindful breathing"
};

const HabitTypeSelector = ({ habitType, setHabitType }) => (
  <ParallaxCard>
    <div className="habit-type-card" aria-label="Habit Type Selector">
      <h3>Select Habit Type</h3>
      <div className="btn-group" role="group" aria-label="Habit types">
        {Object.keys(habitTypeSuggestions).map(t => (
          <button
            key={t}
            className={habitType === t ? "active-btn" : "choice-btn"}
            onClick={() => setHabitType(t)}
            aria-pressed={habitType === t}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="suggested-habit">
        <span role="img" aria-label="lightbulb" className="icon-tip">💡</span>
        Suggested habit: <strong>{habitTypeSuggestions[habitType]}</strong>
      </div>
    </div>
  </ParallaxCard>
);

export default HabitTypeSelector;
