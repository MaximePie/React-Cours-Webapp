# Résumé 

Attention, Avant de poursvuire la lecture, n'oubliez pas de prendre une pause pour consulter ce fichier 
avec les idées claires, parce que vous l'avez bien méritée !

### [Videos de correction](https://www.youtube.com/playlist?list=PLxPhnioBp0U15Q3HOkrvgpU_e2aL3PAh3)

Tous les exercices sont corrigés en vidéo, vous pourrez ainsi suivre la correction à votre rythme, accessibles [ici](https://www.youtube.com/playlist?list=PLxPhnioBp0U15Q3HOkrvgpU_e2aL3PAh3)
![image](https://user-images.githubusercontent.com/16031936/105520768-678fc280-5cdb-11eb-9434-2f5cf83c70f4.png)

[Tous les exercices](https://drive.google.com/drive/folders/1qE--R0VygPz_VWzdUWMIcOjItXx2NsKu?usp=sharing)

## Sommaire 
- [Comment s'entraîner ?](#Comment-pratiquer)
- [State](#State)
    - [Créer un state](#Creer-State)
    - [Modifier un state](#Modifier-un-state)

- [EventListeners](#EventListeners)
    - [onClick](#onClick)
    - [onChange](#onChange)
    - [Paramètres](#Paramètres)

- [Hooks](#Hooks)
    - [useState](#useState)
    - [useEffect](#useEffect)
    - [useContext](#useContext)

- [Router](#Router)
    - [Structure de base](#Structure-de-base)
    - [Router avec historique](#Utiliser-l'historique)
    - [Utiliser les paramètres](#Utiliser-des-paramètres)

- [Redux](#Redux)
    - [Installation et documentation](#Redux-en-général)
    - [Exemple basique] (#Exemple-basique)
--- 
## Comment pratiquer

1.  Téléchargez la liste des exercices complète en cliquant [ici](https://drive.google.com/drive/folders/1qE--R0VygPz_VWzdUWMIcOjItXx2NsKu?usp=sharing)
2.  Ouvrez l'exercice dans un navigateur pour afficher la consigne. 
![image](https://user-images.githubusercontent.com/16031936/105527985-b1c97180-5ce4-11eb-969c-5bad94549d84.png)

3.  Ouvrez l'exercice en parrallèle dans un éditeur de code comme PHPStorm par exemple 
![image](https://user-images.githubusercontent.com/16031936/105528102-d6254e00-5ce4-11eb-8c14-d5a0cb5b5a76.png)

4.  Modifiez le fichier à votre guise pour réaliser l'exercice

5. Consultez la vidéo de correction pour vérifier vos résultats

5-1. Si l'exercice est un dossier (exemple : `routertraining`), alors ouvrez ce dossier. Il s'agit d'une [Create-React-App](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)

5-2. Depuis ce dossier, ouvrir le fichier README.md et suivez les instructions à l'intérieur 

---
## State
[Documentation]()
### Creer State
### Modifier un state

## EventListeners

[Documentation](https://fr.reactjs.org/docs/handling-events.html)

En React, les events listeners se déclarent sous la forme `onEvent`

```js
<button onClick={/*Code à déclencher au clic */}>Cliquez-moi</button>
```

Liste des écouteurs d'événements possibles [ici](https://fr.reactjs.org/docs/events.html#clipboard-events)

### OnClick

Exemple de base de onClick

```js
function Card() {
    return (
      <button onClick={triggerAlert}>Déclencher une alerte</button>
    )

    function triggerAlert() {
        alert("Baba");
    }
}
```

### OnChange

Exemple de base de onChange

[Documentation sur l'objet event](https://fr.reactjs.org/docs/events.html#clipboard-events)

```js
function Card() {
    const [text, setText] = React.useState('');

    return (
      <input onChange={displayContent} value={text}/>
    )

    function displayContent(event) {
      console.log(event)
      console.log(event.target)
      console.log(event.target.value)
      // Effectuer des modifications de state ici 
      setText(event.target.value);
    }
}
```

### Paramètres

Exemples de base sur les paramètres dans les EventsListeners

Envoyer un paramètre à la méthode `deleteNote`
```js
function Card() {
    const [notes, setNotes] = React.useState([]);

    return (
      <div>
        {notes.map((note, index) => (
          <div key={index}>
            {note}
            <button onClick={() => deleteNote(index)}>Supprimer</button>
          </div>
        ))}
      </div>
    )

    function deleteNote(index) {
      console.log("Index " + index);
      // Effectuer des modifications de state ici 
      setNotes([...notes].slice(index, 1));
    }
}
```

Envoyer deux paramètres à la méthode `handleChange`

```js
function Card() {
    const [notes, setNotes] = React.useState([]);

    return (
      <div>
        {notes.map((note, index) => (
          <div key={index}>
            {note}
            <label htmlFor="">
              <input value={note} onChange={(event) => handleChange(event, index)}/>
            </label>
          </div>
        ))}
      </div>
    )

    function handleChange(event, index) {
      console.log("Index " + index);
      console.log("Value " + event.target.value);

      // Effectuer des modifications de state ici 
      const updatedNotes = [...notes];
      updatedNotes[index] = event.target.value;
      setNotes(updatedNotes);
    }
}
```


---
## Hooks 

### UseState

[Documentation](https://fr.reactjs.org/docs/hooks-state.html)

Remplace le state dans les composants de classe. 

#### La fonction

```React.useState()``` prend en paramètre un état de départ. 

| Type de l'état       | Valeur par défaut conseillée |
|----------------------|------------------------------|
| Chaîne de caractères | ''                           |
| Nombre entier        | 0                            |
| Tableau              | []                           |
| Objet                | {}                           |
| On ne sait pas       | undefined ou null            |


#### Utilisation 

`const [age, setAge] = React.useState(0)`

`age` est l'état. 

`setAge` est la fonction qui met à jour age

`setAge(18)` Modifie le state age pour qu'il soit égal à 18

#### Avec des objets 

```js
const [user, setUser] = React.useState({ 
    age: 0, 
    firstname: ''
})
```

Pour mettre à jour, créer un clone de l'objet avec le [spreadOperator](https://stackoverflow.com/questions/60156883/do-i-need-to-use-the-spread-operator-when-using-usestate-hook-on-object-when-upd)

```js
// Mise à jour de l'âge.
setUser({
    ...user,
    age: 5,
})
```

#### Avec des tableaux 

```js
const [notes, setNotes] = React.useState([])

// Mise à jour du tableau.
setNotes([...notes, 5]); // Ajoute 5 à la liste de notes 
```

### UseEffect

#### Utilisation 

[Documentation](https://fr.reactjs.org/docs/hooks-effect.html)

Equivalent à `componentDidUpdate` et `componentDidMount`

Sert à gérer les effets de bord. 

```js

const [age, setAge] = React.useState();
React.useState(function() {
    if (age > 18) {
        console.log("Majeur");
    }
}, [age])

```

Déclenche la fonction quand on utilise `setAge`. 

#### Quelle dépendance choisir ? 

| Cas                                                                                   | Deuxième paramètre                                            |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------|
| Je veux déclencher l'effet de bord à chaque changement de state                       | Pas de deuxième paramètre                                     |
| Je veux déclencher l'effet de bord une seule fois au chargement de la page            | []                                                            |
| Je veux déclencher l'effet de bord à chaque fois que age change                       | [age]                                                         |
| Je veux déclencher l'effet de bord à chaque fois que age, ou firstname change         | [age, firstname]                                              |
| Je veux déclencher deux effets de bords différents, un pour age, et un pour firstname | Créer deux useEffect avec respectivement [age] et [firstname] |

#### Exemples d'effets de bord 

- Si le state `password` change et qu'il est plus court que 8 caractères, alors changer l'état de 
`isMessageDisplayed` pour qu'il soit égal à `true`. Sinon, à `false`.
- Quand on arrive sur la page, je veux charger les informations de l'utilisateur depuis un serveur
- ... 

### UseContext

`React.useContext` permet partager des state à travers toute l'application. 

[Documentation](https://fr.reactjs.org/docs/hooks-reference.html#usecontext)

#### Utilisation 

##### Créer un contexte

`export const isConnectedContext = React.createContext(false);`

`false` est la valeur par défaut. `isConnected` sera le nom du contexte. Veiller à bien **l'exporter** pour l'utiliser 
dans d'autres fichiers. 

##### Utiliser le contexte 
Pour utiliser le contexte, il faut envelopper l'application avec son provider. 

**Attention** à bien lui fournir une value. Par exemple, le state `isConnected` de App

```js
function App() {
    const [isConnected, setConnectionState] = React.useState(false);
    return (
        <isConnectedContext.Provider value={isConnected}>
            <div className="App">
                {/* Mon application ici */}
            </div>
        </isConnectedContext.Provider>
    )
}
```

##### Récupérer le contexte depuis un composant enfant 

Pour récupérer le contexte, il faut l'importer, et l'utiliser. 

```jsx
import isConnectedContext from './isConnectedContext' // isConnectedContext est un fichier que vous devez créer pendant la création du contexte !
function Profile() {
    const isConnected = React.useContext(isConnectedContext)
    return (
        <div>
            {isConnected && <p>Bienvenue !</p>}
            {!isConnected && <p>Accès interdit !</p>}
        </div>
    )
}
```

##### Modifier une valeur du contexte 

Il faut modifier simplement le state qui donne la valeur. 

```jsx
function App() {
    const [isConnected, setConnectionState] = React.useState(false);
    return (
        <isConnectedContext.Provider value={isConnected}>
            <div className="App">
                {/* Mon application ici */}
                <button onClick={login}>Me connecter.</button>
            </div>
        </isConnectedContext.Provider>
    )
    
    /**
    * Cette fonction met à jour le state isConnected pour le régler sur true 
    */
    function login() {
        setConnectionState(true);
    }

}
```

---
## Router

### Prérequis 
Pour utiliser le `Router` vous aurez besoin d'une application React, comme la [`create-react-app`](https://fr.reactjs.org/docs/create-a-new-react-app.html) par exemple.

### Installation 

`npm install react-router-dom`

[Documentation et Exemples](https://reactrouter.com/web/guides/quick-start)
### Structure de base

[BrowserRouter](https://reactrouter.com/web/api/BrowserRouter) > [Switch](https://reactrouter.com/web/api/Switch) > 
[Route](https://reactrouter.com/web/api/Route)


```js

import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'; // Ne pas oublier d'importer les modules !

function App() {
    return (
        <BrowserRouter> {/* Envelopper l'application pour permettre l'usage des Routes */}
            <div className="App">
                {/* Structure permanente, présente sur toutes les pages */}
                <h2>Bonjour</h2>
                <div>
                    <Link to="/page1">Page 1</Link> {/* Remplace le <a href='...'> par <Link to='...'>. Permet de changer de page sans recharger la page*/}
                    <Link to="/page2">Page 2</Link>
                    <Link to="/page3">Page 3</Link>
                    <Link to="/user/Gaëlle">User</Link> {/* Utilisation d'un lien avec Paramètre */}
                </div>
                {/* Fin de la structure permanente */}

                <Switch> {/* Rond point, nécessaire pour un rendu exclusif. (Seulement une des routes ci-dessous sera rendue.*/}
                    <Route path={'/page1'}> {/* Si on est à l'adresse /page1, alors afficher tout ce qu'il y a dedans. */}
                        <div>Page 1</div>
                    </Route>
                    <Route path={'/page2'}>
                        <div>Page 2</div>
                    </Route>
                    <Route path={'/page3'}>
                        <div>Page 3</div>
                    </Route>
                    <Route path={'/user/:name'}> {/* Route avec un paramètre 'name' qu'on pourra exploiter avec useParams*/}
                        <User/> {/* Affichage d'un composant */}
                    </Route>
                </Switch>

                <div>
                    Footer
                </div>
            </div>
        </BrowserRouter>
    )
}
```

### Utiliser l'historique 

Pour utiliser l'historique et avoir acces à la fonction `goBack` par exemple. 

[Documentation](https://reactrouter.com/web/api/Hooks/usehistory)

```jsx
import {useHistory} from 'react-router-dom'; // Importer useHistory

function Profile() {
    const history = useHistory(); exécuter useHistory et stocker le résultat dans une variable 

    /**
     * Rediriger vers la dernière page visitée
     */
    function handleGoBack() {
        history.goBack(); // Appeler la méthode goBack de useHistory 
    }

    return (
        <div>
            Haha
            <button onClick={handleGoBack}>
                Retour
            </button>
        </div>
    )
}
```

### Utiliser des paramètres 

Pour avoir accès aux paramètres reçus, par exemple si je vais à l'adresse `localhost:3000/users/1` et que 1 
est l'id de l'utilisateur, je pourrai demander au backoffice de ne récupérer les informations que de l'utilisateur 1. 

[Documentation](https://reactrouter.com/web/api/Hooks/useparams)

Pour se faire, commencer par déclarer une route pouvant prendre un paramètre : 

```jsx
<Route path="/user/:id"> {/* Ici, 'id' sera le nom du paramètre*/}
    <User/>
</Route>
```

Ainsi, la route sera accessible via l'adresse `localhost:3000/users/1`, mais aussi `localhost:3000/users/5`, 
et même via `localhost:3000/users/baba` !

Puis depuis le composant User, récupérer le paramètre reçu avec `useParams`

```js
import {useParams} from 'react-router-dom'; // Importer useHistory

function User() {
    const { id } = useParams();
    // const id = useParams().id; (Equivalent, la seule différente est syntaxique)

    return (
        <div>
            <h2>User : {id}</h2>
        </div>
    )
}
```


---
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

```

