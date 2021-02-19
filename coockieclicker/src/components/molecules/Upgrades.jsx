import React from 'react';
import Upgrade from "./Upgrade";
import QuantityButtons from "./QuantityButtons";
import multiply from "../../helper/costCalculator";

export default function Upgrades({upgrades, recruit, counter}) {

  const [currentMultiplier, setCurrentMultiplier] = React.useState(1);

  const headerUpgrade = {
    amount: 'Possédés',
    cost: 'Prix',
    name: 'Nom',
  };

  return (
    <div className="Upgrades">
      <QuantityButtons onClick={toggleQuantity} activeMultiplier={currentMultiplier}/>
      {upgrades.map((upgrade, index) => {
        const purchaseInfo = totalCost(index);
        return (
          <Upgrade
            key={index}
            upgrade={upgrade}
            onPurchase={() => recruit(index, purchaseInfo)}
            cost={purchaseInfo.cost}
            counter={counter.amount}
            currentMultiplier={currentMultiplier}
          />
        )
      })}
    </div>
  );

  /**
   * Calculer le coût total d'une amélioration multiplié par le multiplicateur actif
   * @returns {} Le coût total d'une amélioration multiplée par X.
   */
  function totalCost(index) {
    const upgrade = upgrades[index];

    if (currentMultiplier === -1) {
      let maximumQuantity = 0;
      let totalCost = 0;

      while(totalCost < counter.amount) {
        maximumQuantity ++;
        totalCost = multiply(upgrade.cost, upgrade.cost, maximumQuantity)
      }
      maximumQuantity --;
      const cost = Math.round(multiply(upgrade.cost, upgrade.cost, maximumQuantity));
      return {
        cost,
        quantity: maximumQuantity,
      };
    }
    const cost = Math.round(multiply(upgrade.cost, upgrade.cost, currentMultiplier));
    return {
      cost,
      quantity: currentMultiplier
    };
  }

  function toggleQuantity(multiplier) {
    setCurrentMultiplier(multiplier);
  }
}
