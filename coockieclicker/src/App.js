import './style/style.scss';
import * as React from "react";
import upgradesData from './data/upgrades'
import Counter from "./components/molecules/Counter";
import Upgrades from "./components/molecules/Upgrades";
import MysteryNote from "./components/atoms/MysteryNote";

import config from "./data/config";

const {MYSTERY_NOTE_RATIO, MYSTERY_NOTE_LENGTH, MYSTERY_NOTE_MULTIPLIER} = config();

export default function App() {

  const [counter, setCounter] = React.useState({
    amount: 0,
    notesPerSeconds: 0,
  });
  const [upgrades, setUpgrades] = React.useState(upgradesData());
  const [isMysteryNoteDisplayed, setMysteryNoteDisplayState] = React.useState(false);
  const [mysteryNotePosition, setMysteryNotePosition] = React.useState({
    top: 0,
    left: 0,
  });

  React.useEffect(initializeIntervals, []);
  React.useEffect(updateNotesPerSeconds, [upgrades]);
  React.useEffect(handleMysteryNoteChange, [isMysteryNoteDisplayed]);

  return (
    <div className="App">
      {isMysteryNoteDisplayed &&
      <MysteryNote
        onClick={handleMysteryClick}
        position={mysteryNotePosition}
      />
      }
      <Counter counter={counter} onIncrement={onIncrement}/>
      <Upgrades upgrades={upgrades} recruit={recruit} counter={counter}/>
    </div>
  );

  /**
   * Update the counter state to add it a lot of notes
   * And hide the mystery note
   */
  function handleMysteryClick() {
    setCounter({
      ...counter,
      amount: counter.amount + counter.notesPerSeconds * MYSTERY_NOTE_MULTIPLIER,
    });
    setMysteryNoteDisplayState(false);
  }

  /**
   * Try to display a mystery note based on config ratio apparition rate
   */
  function tryToDisplayMysteryNote() {
    let random = Math.random() * Math.floor(100);
    if (random <= MYSTERY_NOTE_RATIO && !isMysteryNoteDisplayed) {
      setMysteryNoteDisplayState(true);
    }
  }


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
   * Initialiser des intervales pour la note mystère et l'ajout de notes par secondes
   */
  function initializeIntervals() {
    const refreshInterval = setInterval(() => {
      refresh();
    }, 100);

    const mysterNoteInterval = setInterval(tryToDisplayMysteryNote, 500);

    return () => {
      clearInterval(refreshInterval);
      clearInterval(mysterNoteInterval);
    };
  }

  /**
   * Mettre à jour l'apport par seconde courant basé sur toutes les améliorations possédées
   */
  function updateNotesPerSeconds() {
    let notesPerSeconds = 0;

    upgrades.forEach(upgrade => {
      notesPerSeconds += upgrade.income * upgrade.amount;
    });

    setCounter({...counter, notesPerSeconds});
  }

  /**
   * Gérer les changements d'états de la note mystère
   */
  function handleMysteryNoteChange() {
    if (isMysteryNoteDisplayed) {
      const timeout = setTimeout(() => {
        setMysteryNoteDisplayState(false);
      }, MYSTERY_NOTE_LENGTH);

      return () => {
        clearTimeout(timeout);
      }
    } else {
      setMysteryNotePosition({
        top: Math.random() * Math.floor(370),
        left: Math.random() * Math.floor(170),
      });
    }
  }
}

