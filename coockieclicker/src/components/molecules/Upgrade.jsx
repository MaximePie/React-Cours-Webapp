import React from 'react';
import Button from "../atoms/Button";

export default function Upgrade({upgrade, onPurchase, counter, isHeader}) {

  let classnames = "Upgrade";

  if (isHeader) {
    classnames += " Upgrade--header";
  }

  return (
    <div className={classnames}>
      <div className="Upgrade__current-amount">
        {upgrade.amount}
      </div>
      <div className="Upgrade__name">
        {upgrade.name}
      </div>
      <div className="Upgrade__cost">
        {upgrade.cost}
        {!isHeader && (
          <Button
            text="Acheter"
            onClick={onPurchase}
            isDisabled={counter < upgrade.cost}
          />
        )}
      </div>
    </div>
  )
}
