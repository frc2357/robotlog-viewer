import React, { useState } from 'react';
import './App.css';
import DropZone from './components/DropZone';
import Title from './components/Title';
import ChartSet from './components/ChartSet';

function App() {
  const [logSessions, setLogSessions] = useState([]);

  // TODO: Figure out why logSessions is being reset each re-render
  const addLogSession = logSession => {
    const newLogSessions = [...logSessions, logSession];
    setLogSessions(newLogSessions);
  };

  return (
    <div className="app">
      <header className="header">
        <Title />
      </header>
      <div className="content">
        { logSessions.map((session, index) => <ChartSet key={index} logSession={session} />) }
        <DropZone onLogSessionLoad={addLogSession} />
      </div>
    </div>
  );
}

export default App;
