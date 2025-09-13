import React from 'react';
import './ProgressGraph.css';

const ProgressGraph = ({ habits }) => (
  <div className="card progress-graph-card" aria-label="Progress Graph">
    <h3>
      Your Progress
      <span role="img" aria-label="bar chart" style={{marginLeft:"8px"}}>📊</span>
    </h3>
    {habits.length === 0 ? (
      <div className="empty-habits-msg">
        Track will show when you add habits!
      </div>
    ) : (
      <div className="mock-chart" aria-label="Graph Bar Chart">
        {habits.map((h, i) => {
          const percent = h.completed && h.total ? h.completed / h.total : 0;
          const barHeight = percent * 120 + 7;
          return (
            <div
              key={i}
              className="mock-bar"
              style={{
                height: `${barHeight}px`,
                background: percent > 0.7 ? "#44de8e" : percent > 0.3 ? "#fbc02d" : "#f77e7e"
              }}
              title={h.name}
              tabIndex={0}
              aria-label={`Bar for ${h.name}, ${Math.round(percent*100)}%`}
            >
              <span className="bar-label">{h.name}</span>
            </div>
          );
        })}
      </div>
    )}
  </div>
);

export default ProgressGraph;
