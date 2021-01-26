import React from 'react';
import { useDispatch } from 'react-redux'


export default function Counter(props) {
  const [counter, setCounter] = React.useState(0);
  const dispatchMethod = useDispatch();

  /**
   * Triggers the "increment" event on Redux
   */
  function updateState() {
    dispatchMethod({type: 'INCREMENT', payload: "COUCOU"})
  }

  return (
    <div className="Counter">
      <h2>State depuis le counter : {counter}</h2>
      C'est le component Counter
      <button onClick={updateState}>Cliquez-moi</button>
    </div>
  );
}
