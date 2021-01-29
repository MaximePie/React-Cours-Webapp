import React from 'react';
import Button from "../atoms/Button";

export default function QuantityButtons({ onClick, activeMultiplier }) {

  const buttons = [1, 10, 100, -1];

  return (
    <div className="QuantityButtons">
      {buttons.map((value, index) => (
        <Button
          key={index}
          className="QuantityButtons__button"
          onClick={() => onClick(value)}
          isInactive={activeMultiplier !== value}
          text={`x${value > 0 ? value : 'MAX'}`}
        />
      ))}
    </div>
  );
}
