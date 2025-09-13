import React from 'react';
import './ComparisionGraph.css';

const ComparisonGraph = ({ habits }) => (
  <div className="card comparison-graph-card" aria-label="Comparison Graph">
    <h3>
      Compare Progress
      <span role="img" aria-label="compare" style={{marginLeft:"8px"}}>👥</span>
    </h3>
    <div className="mock-chart" aria-label="User Comparison Bar Chart">
      <div className="mock-bar comparative" style={{ height: '90px', background: "#56b3df" }}>
        <span className="bar-label">Average User</span>
      </div>
      <div className="mock-bar comparative" style={{ height: '120px', background: "#44de8e" }}>
        <span className="bar-label">You</span>
      </div>
    </div>
  </div>
);

export default ComparisonGraph;
