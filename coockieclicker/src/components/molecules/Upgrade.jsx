import React from 'react';
import Button from "../atoms/Button";

export default function Upgrade(props) {
  return (
    <div className="Upgrade">
      {props.upgrade.name}
      <Button
        text="Acheter"
        onClick={props.onPurchase}
        isDisabled={props.counter < props.upgrade.cost}
      />
    </div>
  )
}
