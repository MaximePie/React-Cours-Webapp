import './style/style.scss';
import * as React from "react";
import Upgrade from "./components/molecules/Upgrade";

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0,
      cookiesPerSeconds: 0,
      upgrades: [
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
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.recruitMother = this.recruitMother.bind(this);
    this.refresh = this.refresh.bind(this);
    this.recruitFour = this.recruitFour.bind(this);

    this.interval = setInterval(this.refresh, 100);
  }

  componentDidUpdate(previousProps, previousState) {
    // Déclencher la fonction quand upgrades change

    if (this.areDifferentArrays(previousState.upgrades, this.state.upgrades)) {

      let cookiesPerSecond = 0;

      this.state.upgrades.forEach(upgrade => {
        cookiesPerSecond += upgrade.income * upgrade.nombre;
      });

      console.log(cookiesPerSecond);

      // Mettre à jour les cookies par seconde en fonction du state des upgrades
      this.setState({
        cookiesPerSeconds: cookiesPerSecond
      })
    }
  }

  /**
   * Comparer les deux tableaux, renvoie true s'ils sont différents, et false s'ils sont équivalents.
   */
  areDifferentArrays(array1, array2) {
    for (let i = 0; i < array1.length; i ++) {
      // Si jamais les nombres ne sont pas les mêmes, renvoyer true
      if (array1[i].nombre !== array2[i].nombre) {
        return true;
      }
    }

    return false;
  }

  render() {
    return (
      <div className="App">
        <h2 className="App__title">Compteur : {Math.round(this.state.counter)}</h2>
        <h4 className="App__subtitle">Apport /s : {this.state.cookiesPerSeconds}</h4>
        <button className="App__increment-button" onClick={this.onIncrement}>Augmenter le compteur</button>

        {this.state.upgrades.map((upgrade, index) => (
          <Upgrade
            key={index}
            upgrade={upgrade}
            onPurchase={() => this.recruit(index)}
            counter={this.state.counter}
          />
        ))}
      </div>
    )
  }

  /**
   * Ajouter le nombre de grands mères au compteur actuel
   */
  refresh() {
    this.setState({
      counter: this.state.counter + this.state.cookiesPerSeconds / 10
    })
  }

  /**
   * Recruter une amélioration dont la position est passée via l'index
   * @param index Number
   */
  recruit(index) {
    // Identifier l'amélioration à acheter
    const upgradesList = [...this.state.upgrades];
    const upgrade = {...upgradesList[index]};

    // Vérifier si on a assez d'argent
    if (this.state.counter >= upgrade.cost) {

      const expense = this.state.counter - upgrade.cost;

      upgrade.cost = Math.round(upgrade.cost * 1.2);
      upgrade.nombre ++;

      upgradesList[index] = upgrade;

      // Mettre à jour le state pour :
      // Dépenser les cookies
      // Mettre à jour notre tableau d'améliorations.
      this.setState({
        counter: expense,
        upgrades: upgradesList,
      })
    }

  }

  /**
   * Recruter un Four
   */
  recruitFour() {
    const {four} = this.state;

    if (this.state.counter > four.cost) {
      this.setState({
        counter: this.state.counter - four.cost,
        four: {
          cost: Math.round(four.cost * 1.2),
          nombre: four.nombre + 1,
        },
      })
    }
  }


  /**
   * Recruter une grand-mère
   */
  recruitMother() {
    const {grandMere} = this.state;

    if (this.state.counter > grandMere.cost) {
      this.setState({
        counter: this.state.counter - grandMere.cost,
        grandMere: {
          cost: Math.round(grandMere.cost * 1.2),
          nombre: grandMere.nombre + 1,
        },
      })
    }
  }

  /**
   * Incrémenter le counter du state
   */
  onIncrement() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
}

