import React from 'react';
import Button from "../atoms/Button";

export default function Counter({ counter, onIncrement }) {
  return (
    <div className="Counter">
      <h2 className="Counter__title">Notes : {Math.round(counter.amount)}</h2>
      <h4 className="Counter__subtitle">Notes /s : {counter.notesPerSeconds}</h4>
      <Button onClick={onIncrement} text="Augmenter le compteur"/>
    </div>
  );
}
