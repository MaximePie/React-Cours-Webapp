import './App.css';
import React from 'react';

import Counter from "./components/Counter";
import Consignes from "./components/Consignes";
import {useSelector} from "react-redux";


function App() {

  const currentState = useSelector(function(state) {
    return state;
  });

  return (
      <div className="App">
        <h1>Afficher le compteur ici {currentState.counter}</h1>
        <Counter/>
        <Consignes/>
      </div>
  );
}

export default App;
