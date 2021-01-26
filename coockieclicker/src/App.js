import './style/style.scss';
import * as React from "react";
import Upgrade from "./components/molecules/Upgrade";
import Button from "./components/atoms/Button";

export default function App() {

  const [counter, setCounter] = React.useState({
    amount: 0,
    cookiesPerSecond: 0,
  });
  const [upgrades, setUpgrades] = React.useState(generateUpgrades());

  React.useEffect(() => {
    const interval = setInterval(() => {
      refresh();
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);


  React.useEffect(() => {
    let cookiesPerSecond = 0;

    upgrades.forEach(upgrade => {
      cookiesPerSecond += upgrade.income * upgrade.nombre;
    });

    setCounter({...counter, cookiesPerSecond});
  }, [upgrades])

  return (
    <div className="App">
      <h2 className="App__title">Compteur : {Math.round(counter.amount)}</h2>
      <h4 className="App__subtitle">Apport /s : {counter.cookiesPerSecond}</h4>
      <Button onClick={onIncrement} text="Augmenter le compteur"/>

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

  /**
   * Ajouter le nombre de grands mères au compteur actuel
   */
  function refresh() {
    setCounter(counter => {
      return {
        ...counter,
        amount: counter.amount + counter.cookiesPerSecond / 10,
      }
    })
  }

  /**
   * Recruter une amélioration dont la position est passée via l'index
   * @param index Number
   */
  function recruit(index) {
    // Identifier l'amélioration à acheter
    const upgradesList = [...upgrades];
    const upgrade = {...upgradesList[index]};

    // Vérifier si on a assez d'argent
    if (counter.amount >= upgrade.cost) {

      const expense = counter.amount - upgrade.cost;

      upgrade.cost = Math.round(upgrade.cost * 1.2);
      upgrade.nombre++;

      upgradesList[index] = upgrade;

      // Mettre à jour le state pour :
      // Dépenser les cookies
      // Mettre à jour notre tableau d'améliorations.

      setUpgrades(upgradesList);
      setCounter({...counter, amount: expense});
    }

  }

  /**
   * Incrémenter le counter du state
   */
  function onIncrement() {
    setCounter({...counter, amount: counter.amount + 1});
  }

  /**
   * Générer la liste des améliorations
   */
  function generateUpgrades() {
    return [
      {
        name: "Grand mère",
        nombre: 0,
        cost: 10,
        income: 1,
      },
      {
        name: "Four",
        nombre: 0,
        cost: 12,
        income: 2,
      },
      {
        name: "Petit biscuit",
        nombre: 0,
        cost: 20,
        income: 10,
      },
    ]
  }
}

