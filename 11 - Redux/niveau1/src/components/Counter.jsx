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

  return (
    <div className="Counter">
      <h2>State depuis le counter : {counter}</h2>
      <button onClick={updateState}>Cliquez-moi</button>
    </div>
  );
}
