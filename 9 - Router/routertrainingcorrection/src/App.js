import './App.css';
import {BrowserRouter, Link, NavLink, Route, Switch, useHistory, useParams} from 'react-router-dom';


function Profile() {
    const history = useHistory();

    /**
     * Rediriger vers la dernière page visitée
     */
    function handleGoBack() {
        history.goBack();
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

function PageParametre() {
    const { id } = useParams();
    // const id = useParams().id;

    return (
        <div>
            <h2>Page paramètre {id}</h2>
        </div>
    )
}

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <div>
                    <h1>Header</h1>
                    <NavLink to="/accueil" className="hurray">Accueil</NavLink>
                    <Link to="/home">Home</Link>
                    <Link to="/page3">Page 3</Link>
                    <Link to="/profil">Profil</Link>
                    <Link to="/parametre/1">Paramètre</Link>
                </div>
                <Switch>
                    <Route path="/accueil">
                        Accueil
                    </Route>
                    <Route path="/page3">
                        Ceci est la page 3. Bonjour !
                    </Route>
                    <Route path="/profil">
                        <Profile/>
                    </Route>
                    <Route path="/parametre/:id">
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
