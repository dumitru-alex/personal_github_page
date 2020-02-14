import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome!
        </h1>
        <p>
          I know it's boring around here.... at least for now.... Hopefully the revolving atom provides enough entertainment.
        </p>
        <p>
          More content will come soon. I promise!
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/dumitru-alex"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/alexandru-paul-dumitru/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
