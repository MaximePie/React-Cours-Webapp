import React from "react";
import './App.css';
import Consignes from "./components/Consignes";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const currentState = useSelector(state => state);
  const dispatch = useDispatch();

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ['+', '-', '/', 'x'];

  return (
    <div className="App">
      <Consignes/>
      <div className="Calculator">
        <div>
          <div className="Calculator__numbers">
            {operations.map((operator, index) => (
              <button className="Button" index={index} onClick={() => triggerOperation(operator)}>
                {operator}
              </button>
            ))}
            {numbers.map((number, index) => (
                <button
                  key={index}
                  onClick={() => handleNumberClick(number + '')}
                  className="Button"
                >
                {number}
              </button>
            ))}
            <button className="Button" onClick={reset}>C</button>
            <button className="Button" onClick={calculate}>=</button>
          </div>
          <div>
            <p>{currentState.symbols}</p>
            <p>Résultat : {currentState.result}</p>
          </div>
        </div>
        <div className="History">
          {currentState.history.map(operation => (
            <p>
              {operation.operations} = {operation.result}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  /**
   * Dispatch l'événement de calcul
   */
  function calculate() {
    dispatch({
      type: 'CALCULATE',
    })
  }

  /**
   * Dispatch l'événement "opérer".
   * @param operator L'opérateur à exécuter, + - / *
   */
  function triggerOperation(operator) {
    dispatch({
      type: 'ADD_OPERATOR',
      value: operator,
    })
  }

  /**
   * Dispatch l'événement RESET
   */
  function reset() {
    dispatch({
      type: 'RESET',
    })
  }

  /**
   * Dispatch un événément contenant le bouton pressé
   * @param buttonString
   */
  function handleNumberClick(buttonString) {
    dispatch({
      type: 'NUMBER_PRESSED',
      value: buttonString,
    })
  }
}

export default App;
