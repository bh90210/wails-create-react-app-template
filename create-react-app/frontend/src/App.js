import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://wails.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wails Documents
        </a>
      </header>
    </div>
  );
}

export default App;