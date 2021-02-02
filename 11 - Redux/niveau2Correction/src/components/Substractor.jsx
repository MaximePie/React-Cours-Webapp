import React from 'react';
import {useDispatch, useSelector} from "react-redux";

export default function Substractor() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  /**
   * Dispatch l'événement SUBSTRACT
   */
  function substract(amount) {
    dispatch({
      type: 'SUBSTRACT',
      number: amount,
    })
  }

  return (
    <div className="Substractor">
      <h2>Compteur : {state.counter}</h2>
      <button onClick={() => substract(1)}> - 1 </button>
      <button onClick={() => substract(2)}> - 2 </button>
      <button onClick={() => substract(3)}> - 3 </button>
      <button onClick={() => substract(4)}> - 4 </button>
    </div>
  );
}
