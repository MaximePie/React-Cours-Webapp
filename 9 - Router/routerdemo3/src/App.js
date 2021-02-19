import React from "react";
import './App.css';
import {BrowserRouter as Router, NavLink, Route, Switch, useParams, useHistory} from "react-router-dom";

function User() {
  const params = useParams();
  const history = useHistory();
  console.log(history);

  return (
    <div>
      <h2>Bonjour {params.username}</h2>
      <button onClick={goPrevious}>Retour arrière</button>
    </div>
  )

  function goPrevious() {
    history.goBack();
  }
}


function App() {
  return (
    <Router>
      <div>
        <div className="Header">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/sandwiches">Sandwiches</NavLink>
          <NavLink to="/user/Bernard">Bernard</NavLink>
          <NavLink to="/user/Lucie">Lucie</NavLink>
          <NavLink to="/desserts">Desserts</NavLink>
          <NavLink to="/boissons">Boissons</NavLink>
        </div>
        <Switch>
          <Route path='/' exact={true}>
            <h1>Accueil</h1>
          </Route>
          <Route path='/user/:username'>
            <User/>
          </Route>
          <Route path="/sandwiches">
            <div>
              <h1>Sandwiches</h1>
              <p>Thon</p>
              <p>Thon</p>
              <p>Thon</p>
            </div>
          </Route>
          <Route path="/desserts">
            <div>
              <h1>Desserts</h1>
              <p>Surimi</p>
              <p>Surimi</p>
              <p>Surimi</p>
            </div>
          </Route>
          <Route path='/boissons'>
            <div>
              <h1>Boissons</h1>
              <p>Café</p>
              <p>Jus de canneberge</p>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
