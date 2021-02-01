import React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';


export default function Additionner() {
  const { counter } = useSelector(state => state);
  const dispatchMethod = useDispatch();

  /**
   * Triggers the "increment" event on Redux
   */
  function updateState() {
    dispatchMethod({type: 'INCREMENT'})
  }

  /**
   * Dispatcher l'événement 'DECREMENT'
   */
  function decrement() {
    dispatchMethod({
      type: 'DECREMENT',
    })
  }

  /**
   * Dispatcher l'événement 'RESET'
   */
  function reset() {
    dispatchMethod({
      type: "RESET",
    })
  }

  return (
    <div className="Counter">
      <h2>State depuis le counter : {counter}</h2>
      <button onClick={updateState}>Cliquez-moi</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
