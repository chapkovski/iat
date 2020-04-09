import React from 'react';
import logo from './logo.svg';
import './App.css';
const data = [{
  id: 1,
  q: { type: 'text', content: 'jopa', belongs: 'left' },
  left: [{ label: 'bad' }, { label: 'cold' }],
  right: [{ label: 'good' }, { label: 'hot' }]
}]
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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
