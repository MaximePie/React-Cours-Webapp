import './App.css';
import {BrowserRouter, Link, NavLink, Route, Switch, useHistory, useParams} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";


function Profile() {
    const history = useHistory();

    /**
     * Déclencher la méthode goBack du hook useHistory de React Router
     */
    function onGoBackClick() {
        history.goBack();
    }

    return (
        <div className="Profil">
            <p>Nom : Jean</p>
            <p>Prénom : Mario</p>
            <p>Age : 15</p>
            <button onClick={onGoBackClick}>Retourner en arrière</button>
        </div>
    )
}

function PageParametre() {
    const { firstname } = useParams();

    return (
        <div>
            <h2>Bonjour : {firstname}</h2>
        </div>
    )
}

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/accueil">
                        Accueil
                        <Link activeClassName="active" to="/page/zouzou">Page Zouzou</Link>
                    </Route>
                    <Route path="/page3">
                        Ceci est la page 3. Bonjour !
                    </Route>
                    <Route path='/profil'>
                        <Profile/>
                    </Route>
                    <Route path='/page/:firstname'>
                        <PageParametre/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
