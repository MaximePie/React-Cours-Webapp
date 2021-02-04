
## Redux
Cette section est encore en travaux

### Redux en général

[Ressources d'apprentissage](https://redux.js.org/introduction/learning-resources)

[Comprendre Redux par le dessin](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6)

[Résumé en carte mentale](https://mind42.com/public/8134952c-a3d8-4e27-804b-c761072d10f4)


### Installation 

[Documentation](https://react-redux.js.org/) sur comment installer Redux avec React

Pour installer Redux avec Yarn

`yarn add redux && yarn add react-redux`


Pour installer Redux avec NPM

`npm install redux && npm install react-redux`


### Example basique

- Créer un fichier  `reducer.js` qui contiendra la "notice" de notre state global. 

```js
// reducer.js

// source de vérité, qui correspond à la structure du state
const initialState = {
  counter: 0,
  baba: "",
};

// Votre reducer de state
export default (state = initialState, action = {}) => {

  // le switch travaille avec le dispatch
  switch (action.type) {
    case 'INCREMENT':
      console.log(action)
      return {...state, counter: state.counter + 1};
    default:
      return state;
  }
}


```

- Envelopper l'application dans un Provider qui prend un store en paramètre. Le store est le résultat de la méthode 
`createStore` à laquelle on a passé le `reducer` en paramètre. 

```js
// index.js

import {Provider} from "react-redux";
import {createStore} from "redux";

import reducer from './reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

```

- Dans App.js, récupérer le state global grâce au hook `useSelector`. 

Il est possible de ne sélectionner que le `counter` du state si on le souhaite. 

`const { counter } = useSelector(state => state)`

```js
// App.js

import './App.css';
import Counter from './components/Counter'
import * as React from "react";
import {useSelector} from "react-redux";

function App() {

  const state = useSelector(state => state);
  console.log(state);

  return (
    <div className="App">
      <h1>Compteur : {state.counter}</h1>
      <Counter />
    </div>
  );
}

export default App;
```

- Dans tous les composants de vos choix, récupérer une méthode `dispatcher`, que l'on peut appeler 
quand on veut pour propager un événement. 

```js
// Counter.js
import React from 'react';
import {useDispatch, useSelector} from "react-redux";

export default function Counter({onClick}) {

  const dispatcher = useDispatch();
  const { counter } = useSelector(state => state);

  /**
   * Déclencher un événement avec le dispatcher
   */
  function triggerDispatch() {
    // On envoie un objet à notre méthode dispatcher. Elle est récupérée dans la fonction du reducer. 
    dispatcher({type: "INCREMENT", payload: {compteur: 1}})
  }

  return (
    <div className="Counter">
      <h1>Counter:  {counter}</h1>
      <button onClick={triggerDispatch}>Incrémenter</button>
      <button onClick={triggerDispatch}>Incrémenter</button>
    </div>
  );
}
