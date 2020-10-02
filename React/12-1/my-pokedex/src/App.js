import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <section>
      <div className="title-container">
        <h1 className="title">Pokedex</h1>
      </div>
      <div className="App">
        <Pokedex />
      </div>
    </section>
  );
}

export default App;
