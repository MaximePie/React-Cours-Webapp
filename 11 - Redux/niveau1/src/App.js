import './App.css';
import React from 'react';

import Counter from "./Counter";
import {useSelector} from "react-redux";


function App() {
  const { counter } = useSelector(state => state);

  return (
      <div className="App">
        <h1>State depuis App {counter}</h1>
        <Counter/>
      </div>
  );
}

export default App;
