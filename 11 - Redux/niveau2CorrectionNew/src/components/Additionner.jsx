import React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';


export default function Additionner() {
  const dispatchMethod = useDispatch();

  const counter = useSelector(state => state.counter);

  /**
   * Triggers the "ADD" event on Reducer
   * Sends the amount as a data key
   */
  function add(amount) {
    dispatchMethod({type: 'ADD', number: amount}) // -- Envoie la valeur amount à notre reducer. Il pourra la récupérer grâce à action.number.
  }

  return (
    <div className="Additionner">
      <h2>State depuis le composant Additionner : {counter}</h2>
      <button onClick={() => add(1)}>+ 1</button>
      <button onClick={() => add(2)}>+ 2</button>
      <button onClick={() => add(3)}>+ 3</button>
      <button onClick={() => add(4)}>+ 4</button>
    </div>
  );
}
