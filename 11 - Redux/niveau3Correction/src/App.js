import React from "react";
import './App.css';
import Consignes from "./components/Consignes";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Consignes/>
      <div>
        <h3>Results : {state.results}</h3>
        <input type="number" value={state.firstNumber} name="firstNumber" onChange={handleNumberChange}/>
        <input type="number" value={state.secondNumber} name="secondNumber" onChange={handleNumberChange}/>

        <button onClick={() => {calculate('ADD')}}> + </button>
        <button onClick={() => {calculate('SUBTRACT')}}> - </button>
        <button onClick={() => {calculate('MULTIPLY')}}> x </button>
        <button onClick={() => {calculate('DIVIDE')}}> / </button>
        <button onClick={() => {calculate('RESET')}}> 0 </button>
      </div>
    </div>
  );

  function calculate(operation) {
    dispatch({type: operation});

    // if (operation === 'ADD') {
    //   dispatch({type: 'ADD'});
    // }
    // if (operation === 'SUBTRACT') {
    //   dispatch({type: 'SUBTRACT'})
    // }
  }

  function handleNumberChange(event) {
    dispatch({
      type: 'UPDATE_FIELD',
      fieldName: event.target.name,
      value: event.target.value,
    })
  }
}

export default App;
