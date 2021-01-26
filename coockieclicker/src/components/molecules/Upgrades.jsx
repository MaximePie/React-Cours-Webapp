import React from 'react';
import Upgrade from "./Upgrade";

export default function Upgrades({upgrades, recruit, counter}) {

  const headerUpgrade = {
    amount: 'Possédés',
    cost: 'Prix',
    name: 'Nom',
  };

  return (
    <div className="Upgrades">
      {upgrades.map((upgrade, index) => (
        <Upgrade
          key={index}
          upgrade={upgrade}
          onPurchase={() => recruit(index)}
          counter={counter.amount}
        />
      ))}
    </div>
  );
}
