import React, { useState } from 'react';
import Sidebar from './Sidebar';
import HabitTypeSelector from './HabitTypeSelector';
import HabitSelector from './HabitSelector';
import TrackProgress from './TrackProgress';
import Leaderboard from './Leaderboard';
import ProgressGraph from './ProgressGraph';
import ComparisonGraph from './ComparisonGraph';
import MotivationalQuote from './MotivationalQuote';
import FabButton from './FabButton';
import ConfettiCelebration from './ConfettiCelebration';
import './Dashboard.css';

const Dashboard = ({ user, showSnackbar }) => {
  const [activePage, setActivePage] = useState("Track Progress");
  const [habitType, setHabitType] = useState("Activity");
  const [habits, setHabits] = useState([]);
  const [showHabitForm, setShowHabitForm] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
    showSnackbar && showSnackbar("Habit added!", "success");
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  const pages = [
    "Track Progress",
    "Leaderboard",
    "Graphs"
  ];

  return (
    <div className="dashboard-main">
      <ConfettiCelebration active={showConfetti} />
      <Sidebar pages={pages} activePage={activePage} setActivePage={setActivePage} />
      <div className="dashboard-content">
        <MotivationalQuote />
        <HabitTypeSelector habitType={habitType} setHabitType={setHabitType} />
        {showHabitForm && (
          <HabitSelector habitType={habitType} addHabit={addHabit} showSnackbar={showSnackbar} />
        )}
        {activePage === "Track Progress" && <TrackProgress habits={habits} />}
        {activePage === "Leaderboard" && <Leaderboard />}
        {activePage === "Graphs" && (
          <>
            <ProgressGraph habits={habits} />
            <ComparisonGraph habits={habits} />
          </>
        )}
        <FabButton onClick={() => setShowHabitForm((prev) => !prev)} />
      </div>
    </div>
  );
};

export default Dashboard;
