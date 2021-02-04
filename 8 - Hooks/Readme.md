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
