import React from "react";
import './App.css';
import Consignes from "./components/Consignes";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const currentState = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Consignes/>
      <div>
        <h3>Resultat : {currentState.result}</h3>
        <input
          type="number"
          value={currentState.firstNumber}
          onChange={handleFieldChange}
          name="firstNumber"
        />
        <input
          type="number"
          value={currentState.secondNumber}
          onChange={handleFieldChange}
          name="secondNumber"
        />
        <button onClick={() => calculate('ADD')}>+</button>
        <button onClick={() => calculate('SUBTRACT')}>-</button>
        <button onClick={() => calculate('MULTIPLY')}>*</button>
        <button onClick={() => calculate('DIVIDE')}>/</button>
        <button onClick={() => calculate('RESET')}>CE</button>
      </div>
    </div>
  );

  function calculate(actionType) {
    dispatch({
      type: actionType
    })
  }

  function subtract() {
    dispatch({
      type: 'SUBTRACT',
    })
  }

  function add() {
    dispatch({
      type: 'ADD'
    })
  }

  /**
   *
   * @param event
   */
  function handleFieldChange(event) {
    dispatch({
      type: 'UPDATE_FIELD',
      value: event.target.value,
      field: event.target.name,
    });

    // if (event.target.name === 'firstNumber') {
    //   dispatch({
    //     type: 'UPDATE_FIELD',
    //     value: event.target.value,
    //     field: event.target.name,
    //   })
    // }
    // else {
    //   dispatch({
    //     type: 'UPDATE_FIELD',
    //     value: event.target.value,
    //     field: event.target.name,
    //   })
    // }
  }
}

export default App;
