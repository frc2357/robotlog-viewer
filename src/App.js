import React, { useState } from 'react';
import './App.css';
import DropZone from './components/DropZone';
import Title from './components/Title';
import ChartSet from './components/ChartSet';

function App(props) {
  const [logSessions, setLogSessions] = useState([]);

  // TODO: Figure out why logSessions is being reset each re-render
  const addLogSession = logSession => {
    const newLogSessions = [...logSessions, logSession];
    setLogSessions(newLogSessions);
  };

  if(props.log) {
    let request = new XMLHttpRequest();
    request.onabort = () => console.err('log load was aborted');
    request.onerror = () => console.err('log load failed');
    request.onload = () => {
      addLogSession(request.response);
    }
    request.open("GET", props.log);
    request.send();
  }

  return (
    <div className="app">
      <header className="header">
        <Title />
      </header>
      <div className="content">
        { logSessions.map((session, index) => <ChartSet key={index} logSession={session} />) }
      </div>
    </div>
  );
}

export default App;
