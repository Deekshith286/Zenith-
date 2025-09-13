import React from 'react';
import GradientProgressBar from './GradientProgressBar';
import ParallaxCard from './ParallaxCard';
import './TrackProgress.css';

const TrackProgress = ({ habits }) => (
  <ParallaxCard>
    <div className="track-progress-card" aria-live="polite">
      <h3>
        Habit Progress ({habits.length}) <span role="img" aria-label="progress">🏃‍♂️</span>
      </h3>
      {habits.length === 0 ? (
        <div className="empty-habits-msg">No habits yet! Add your first healthy habit above. 🌱</div>
      ) : (
        <div className="progress-list">
          {habits.map((habit, i) => {
            const percent = habit.completed && habit.total
              ? Math.round((habit.completed / habit.total) * 100)
              : 0;
            return (
              <div key={i} className="progress-item">
                <div className="progress-label">
                  <span role="img" aria-label="leaf" className="progress-label-icon">🌿</span>
                  {habit.name}
                  <span className="progress-percent">{percent}%</span>
                </div>
                <GradientProgressBar percent={percent} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  </ParallaxCard>
);

export default TrackProgress;
