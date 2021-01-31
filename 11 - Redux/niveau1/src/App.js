import './App.css';
import React from 'react';

import Counter from "./components/Counter";
import Consignes from "./components/Consignes";


function App() {
  return (
      <div className="App">
        <h1>Afficher le compteur ici </h1>
        <Counter/>
        <Consignes/>
      </div>
  );
}

export default App;
