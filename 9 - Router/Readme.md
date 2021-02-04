
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

