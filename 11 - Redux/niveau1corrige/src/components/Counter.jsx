import React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';


export default function Counter() {
  const { counter } = useSelector(state => state);
  const dispatchMethod = useDispatch();

  /**
   * Triggers the "increment" event on Redux
   */
  function updateState() {
    dispatchMethod({type: 'INCREMENT'})
  }

  function decrement() {
    dispatchMethod({type: 'DECREMENT'})
  }

  function reset() {
    dispatchMethod({type: 'RESET'});
  }

  return (
    <div className="Counter">
      <h2>State depuis le counter : {counter}</h2>
      <button onClick={updateState}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
}
