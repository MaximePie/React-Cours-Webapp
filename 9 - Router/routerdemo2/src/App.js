import './App.css';
import {BrowserRouter as Router, Link, Route, Switch, useHistory, useParams} from "react-router-dom";

function User() {

    const history = useHistory();
    const { id } = useParams();

    return (
        <div>
            <p>
                Zouzou numéro { id }
            </p>
            <button onClick={handleGoBack}>Retour</button>
        </div>
    )

    /**
     * Retourner en arrière avec goBack
     */
    function handleGoBack() {
        console.log(history);
        history.goBack();
        // history.push('/page3')
    }
}

function App() {
    return (
        <Router>
            <div className="App">
                <h2>React Router Démonstration</h2>
                <a href="https://reactrouter.com/web/guides/quick-start">Documentation</a>
                <p>
                    <Link to="/">Home</Link>
                    <Link to="/user/1">User 1</Link>
                    <Link to="/user/2">User 2</Link>
                    <Link to="/page1">Page 1</Link>
                    <Link to="/page2">Page 2</Link>
                    <Link to="/page3">Page 3</Link>
                </p>
                <Switch>
                    <Route path="/" exact>
                        <div>Accueil</div>
                    </Route>
                    <Route path="/user/:id">
                        <User/>
                    </Route>
                    <Route path="/page1">
                        <div>Page 1</div>
                    </Route>
                    <Route path="/page2">
                        <div>Page 2</div>
                    </Route>
                    <Route path="/page3">
                        <div>Page 3</div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
