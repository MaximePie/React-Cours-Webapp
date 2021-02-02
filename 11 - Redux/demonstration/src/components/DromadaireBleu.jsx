import React from 'react';
import {useDispatch, useSelector} from "react-redux";

export default function DromadaireBleu(props) {

  const {counter, nombreDeBananes} = useSelector(state => state);
  const dispatch = useDispatch();

  /**
   * Envoyer l'événement Increment
   */
  function dispatchIncrement(amount) {
    dispatch({
      type: "INCREMENT",
      data: amount,
    });
  }

  /**
   * Envoyer l'événement DECREMENT
   */
  function dispatchDecrement() {
    dispatch({
      type: "DECREMENT",
    })
  }

  return (
    <div className="DromadaireBleu">
      <h3>Nb bananes : {nombreDeBananes}</h3>
      C'est le counter DromadaireBleu : {counter}
      <button onClick={() => dispatchIncrement(1)}>+1</button>
      <button onClick={() => dispatchIncrement(2)}>+2</button>
      <button onClick={dispatchDecrement}>Decrement</button>
    </div>
  );
}
