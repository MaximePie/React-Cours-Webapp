import React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';


export default function Additionner() {
  const dispatch = useDispatch();
  const state = useSelector(function(state) {
    return state;
  });

  /**
   * Triggers the "ADD" event on Reducer
   * Sends the amount as a data key
   */
  function add(amount) {
    dispatch({
      type: 'ADD',
      number: amount,
    })
  }

  return (
    <div className="Additionner">
      <h2>State depuis le composant Additionner {state.counter}</h2>
      <button onClick={() => add(1)}>+ 1</button>
      <button onClick={() => add(2)}>+ 2</button>
      <button onClick={() => add(3)}>+ 3</button>
      <button onClick={() => add(4)}>+ 4</button>
    </div>
  );
}
