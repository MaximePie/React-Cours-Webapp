import './App.css';
import Counter from './components/Counter'
import * as React from "react";
import {useSelector} from "react-redux";

function App() {

  const state = useSelector(state => state);
  console.log(state);

  return (
    <div className="App">
      <h1>Compteur : {state.counter}</h1>
      <Counter />
    </div>
  );
}

export default App;
