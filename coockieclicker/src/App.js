import './style/style.scss';
import * as React from "react";
import Upgrade from "./components/molecules/Upgrade";
import Counter from "./components/molecules/Counter";
import Upgrades from "./components/molecules/Upgrades";

export default function App() {

  const [counter, setCounter] = React.useState({
    amount: 0,
    notesPerSeconds: 0,
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
    let notesPerSeconds = 0;

    upgrades.forEach(upgrade => {
      notesPerSeconds += upgrade.income * upgrade.amount;
    });

    setCounter({...counter, notesPerSeconds});
  }, [upgrades])

  return (
    <div className="App">
      <Counter counter={counter} onIncrement={onIncrement}/>
      <Upgrades upgrades={upgrades} recruit={recruit} counter={counter}/>
    </div>
  );

  /**
   * Ajouter le amount de grands mères au compteur actuel
   */
  function refresh() {
    setCounter(counter => {
      return {
        ...counter,
        amount: counter.amount + counter.notesPerSeconds / 10,
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
      upgrade.amount++;

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
        name: "Triangle",
        amount: 0,
        cost: 10,
        income: 1,
      },
      {
        name: "Tambour",
        amount: 0,
        cost: 12,
        income: 2,
      },
      {
        name: "Sifflet",
        amount: 0,
        cost: 20,
        income: 10,
      },
    ]
  }
}

