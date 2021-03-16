import React from 'react';
import {useDispatch} from "react-redux";

export default function Substractor() {
  const dispatch = useDispatch();

  function subtract(quantity) {
    dispatch({
      type: 'SUBTRACT',
      data: quantity,
    })
  }

  return (
    <div className="Substractor">
      <button onClick={() => subtract(1)}>-1</button>
      <button onClick={() => subtract(2)}>-2</button>
      <button onClick={() => subtract(3)}>-3</button>
      <button onClick={() => subtract(4)}>-4</button>
    </div>
  );
}
