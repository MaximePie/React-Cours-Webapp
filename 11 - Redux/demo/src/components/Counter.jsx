import React from 'react';
import {useDispatch, useSelector} from "react-redux";

export default function Counter({onClick}) {

  const dispatcher = useDispatch();
  const { counter } = useSelector(state => state);

  /**
   * Déclencher un événement avec le dispatcher
   */
  function triggerDispatch() {
    dispatcher({type: "INCREMENT", payload: {compteur: 1}})
  }

  return (
    <div className="Counter">
      <h1>Counter:  {counter}</h1>
      <button onClick={triggerDispatch}>Incrémenter</button>
      <button onClick={triggerDispatch}>Incrémenter</button>
    </div>
  );
}
