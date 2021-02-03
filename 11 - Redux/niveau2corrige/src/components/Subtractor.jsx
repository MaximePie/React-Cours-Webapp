import React from 'react';
import {useDispatch} from "react-redux";

export default function Subtractor() {
  const dispatch = useDispatch();

  function subtract(amount) {
    dispatch({
      type: 'SUBTRACT',
      data: amount,
    })
  }

  return (
    <div className="Subtractor">
      <button onClick={() => subtract(1)}>- 1 </button>
      <button onClick={() => subtract(2)}>- 2 </button>
      <button onClick={() => subtract(3)}>- 3 </button>
      <button onClick={() => subtract(4)}>- 4 </button>
    </div>
  );
}
