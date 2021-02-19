import './App.css';
import {BrowserRouter, Link, NavLink, Route, Switch, useHistory, useParams} from 'react-router-dom';


function Profile() {

    let history = useHistory();

    return (
      <div>
          <h2>Ceci est le composant Profil</h2>
          <button onClick={goBack}>Go Back</button>
      </div>
    )

    function goBack() {
        history.goBack();
    }
}

function PageParametre() {

    const params = useParams();
    const idValue = params.id;

    console.log(params);

    return (
      <div>
          <h2>Page paramètre : {idValue}</h2>
      </div>
    )
}


function App() {

    return (
      <BrowserRouter>
          <div className="App">
              <div>
                  <h1>Header</h1>
                  <NavLink to="/accueil" >Accueil</NavLink>
                  <NavLink to="/home">Home</NavLink>
                  <NavLink to="/page3">Page 3</NavLink>
                  <NavLink to="/profil">Profil</NavLink>
                  <NavLink to="/parametre/1">Paramètre 1</NavLink>
                  <NavLink to="/parametre/2">Paramètre 2</NavLink>
              </div>
              <Switch>
                  <Route path="/accueil">
                      Accueil
                  </Route>
                  <Route path="/page3">
                      Ceci est la page 3. Bonjour !
                  </Route>
                  <Route path="/profil" >
                      <Profile/>
                  </Route>
                  <Route path='/parametre/:id'>
                      <PageParametre/>
                  </Route>
              </Switch>
              <div>
                  <p>Créer une nouvelle route /profil qui va afficher un Composant Profile</p>
                  <p>Créer le composant Profile qui va afficher des informations de votre choix</p>
                  <p>
                      Sur le composant Profile, créer un lien qui permet de revenir à la page précédente
                  </p>
              </div>
              <div>
                  <p>Créer un route qui redirige vers un paramètre, et qui afficher un composant PageParametre</p>
                  <p>Dans le composant PageParamètre, afficher la valeur du paramètre reçu en URL avec useParams</p>
                  <p>Utilisation des paramètres ici : <a href="https://reactrouter.com/web/example/url-params">https://reactrouter.com/web/example/url-params</a></p>
              </div>
              <div>
                  <p>Dans le header du composant App, remplacer les composants Link par des
                      <a href="https://reactrouter.com/web/guides/primary-components/navigation-or-route-changers">
                          Navigation
                      </a>
                  </p>
                  <p>
                      Modifier votre code de manière à ce que le lien du header courant s'affiche en vert.
                  </p>
              </div>
              <div>
                  <p>Footer</p>
              </div>
          </div>
      </BrowserRouter>
    );
}

export default App;
