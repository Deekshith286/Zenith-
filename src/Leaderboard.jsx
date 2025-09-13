import React from 'react';
import AvatarGenerator from './AvatarGenerator';
import ParallaxCard from './ParallaxCard';
import './Leaderboard.css';

const dummyLeaders = [
  { user: 'Alex', rank: 1, points: 120 },
  { user: 'Sam', rank: 2, points: 99 },
  { user: 'Jamie', rank: 3, points: 85 }
];

const Leaderboard = () => (
  <ParallaxCard>
    <div className="leaderboard-card" aria-label="Leaderboard Table">
      <h3>
        Leaderboard <span role="img" aria-label="trophy">🏆</span>
      </h3>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Rank</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {dummyLeaders.map((l, i) => (
            <tr key={i} className={l.rank === 1 ? "gold-row" : ""}>
              <td>
                <AvatarGenerator username={l.user} />
                {l.user}
              </td>
              <td>{l.rank}</td>
              <td>{l.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </ParallaxCard>
);

export default Leaderboard;
