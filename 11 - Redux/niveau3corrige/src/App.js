import React from "react";
import './App.css';
import Consignes from "./components/Consignes";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  function updateFirstQuantity(event) {
    dispatch({
      type: "UPDATE_FIRST_QUANTITY",
      data: event.target.value,
    })
  }

  function updateSecondQuantity(event) {
    dispatch({
      type: "UPDATE_SECOND_QUANTITY",
      data: event.target.value,
    })
  }


  return (
    <div className="App">
      <Consignes/>
      <h2>Résultat : {state.result}</h2>
      <input type="number" value={state.firstQuantity} onChange={updateFirstQuantity}/>
      <input type="number" value={state.secondQuantity} onChange={updateSecondQuantity}/>
      <button onClick={() => operate("ADD")}>+</button>
      <button onClick={() => operate("SUBTRACT")}>-</button>
      <button onClick={() => operate("MULTIPLY")}>X</button>
      <button onClick={() => operate("DIVIDE")}>/</button>
      <button onClick={() => operate("RESET")}>RESET</button>
    </div>
  );

  function operate(operator) {
    dispatch({
      type: operator
    })
  }
}

export default App;
