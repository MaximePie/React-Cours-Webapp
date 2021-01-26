import React from 'react';
import Button from "../atoms/Button";

export default function Upgrade({upgrade, onPurchase, counter}) {
  return (
    <div className="Upgrade">
      <img className="Upgrade__image" src={upgrade.image} alt="Upgrade image "/>
      <div className="Upgrade__name">
        {upgrade.name}({upgrade.amount})
      </div>
      <div className="Upgrade__cost">
        {upgrade.cost}
      </div>
      <Button
        text="Acheter"
        onClick={onPurchase}
        isDisabled={counter < upgrade.cost}
      />
    </div>
  )
}
