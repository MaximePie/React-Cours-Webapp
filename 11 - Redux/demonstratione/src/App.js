import './App.css';
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";

function App() {

  const currentState = useSelector(function(state) {
    return state;
  });

  const dispatch = useDispatch();

  function decrement() {
    dispatch({
      type: 'SUBTRACT',
    });
  }

  function increment(quantity) {
    dispatch({
      type: 'ADD',
      data: quantity,
    });
  }

  return (
    <div className="App">
      Bonjour le monde
      <h2>Compteur : {currentState.counter}</h2>
      <button onClick={() => increment(1)}>+1</button>
      <button onClick={() => increment(2)}>+2</button>
      <button onClick={() => increment(3)}>+3</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}

export default App;
