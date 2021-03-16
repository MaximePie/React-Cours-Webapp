import React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';


export default function Additionner() {
  const dispatchMethod = useDispatch();
  const currentState = useSelector(function(state){
    return state
  });

  /**
   * Triggers the "ADD" event on Reducer
   * Sends the amount as a data key
   */
  function add(amount) {
    dispatchMethod({type: 'ADD', data: amount}) // Envoie la valeur 100 à notre reducer. Il pourra la récupérer grâce à action.data.
  }

  return (
    <div className="Additionner">
      <h2>State depuis le composant Additionner {currentState.counter}</h2>
      <button onClick={() => add(1)}>+ 1</button>
      <button onClick={() => add(2)}>+ 2</button>
      <button onClick={() => add(3)}>+ 3</button>
      <button onClick={() => add(4)}>+ 4</button>
    </div>
  );
}
