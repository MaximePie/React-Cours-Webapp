import React from "react";
import './style/App.scss';
import {Route, BrowserRouter, Switch, NavLink} from "react-router-dom";
import Products from "./components/Products";
import Header from "./components/molecules/Header";
import Cart from "./components/molecules/Cart"

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div className="App">
        <Switch>
          <Route path='/sandwich'>
            <Products category="Sandwich"/>
          </Route>
          <Route path='/boisson'>
            <Products category="Boisson"/>
          </Route>
          <Route path='/dessert'>
            <Products category="Dessert"/>
          </Route>
          <Route path='/' exact={true}>
            Accueil
          </Route>
        </Switch>
        <Cart/>
      </div>
    </BrowserRouter>
  );
}

export default App;
