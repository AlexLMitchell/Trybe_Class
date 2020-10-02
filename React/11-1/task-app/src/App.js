import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return <li>{value}</li>;
};

const justDoIt = ['Exercise', 'Study', 'React'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {justDoIt.map(justDoIt => task(justDoIt))}
      </header>
    </div>
  );
}

export default App;
