import React from "react";
import './App.scss';
import {useSelector} from "react-redux";
import {Route, BrowserRouter, Switch, NavLink} from "react-router-dom";

function App() {

  const { cart: products } = useSelector(state => state);

  const sandwiches = products.filter(product => product.category === 'Sandwich');
  const desserts = products.filter(product => product.category === 'Dessert');
  const boissons = products.filter(product => product.category === 'Boisson');

  return (
    <BrowserRouter>
      <div className="Header">
        <NavLink exact={true} to="/" className="Header__link" activeClassName="Header__link--active">Accueil</NavLink>
        <NavLink to="/sandwich" className="Header__link" activeClassName="Header__link--active">Sandwich</NavLink>
        <NavLink to="/dessert" className="Header__link" activeClassName="Header__link--active">Desserts</NavLink>
        <NavLink to="/boisson" className="Header__link" activeClassName="Header__link--active">Boisson</NavLink>
      </div>
      <div className="App">
        <Switch>
          <Route path='/sandwich'>
            <div className="Products">
              {sandwiches.map(sandwich => (
                <div className="Product">
                  <p>
                    {sandwich.name}
                  </p>
                  <p>
                    {sandwich.unitPrice}€
                  </p>
                  <p>
                    {sandwich.quantity}
                  </p>
                  <button className="Product__action">+</button>
                </div>
              ))}
            </div>
          </Route>
          <Route path='/boisson'>
            {boissons.map(boisson => (
              <div>
                <p>
                  {boisson.name}
                </p>
                <p>
                  {boisson.price}
                </p>
                <p>
                  {boisson.category}
                </p>
                <p>
                  {boisson.quantity}
                </p>
              </div>
            ))}
          </Route>
          <Route path='/dessert'>
            {desserts.map(dessert => (
              <div>
                <p>
                  {dessert.name}
                </p>
                <p>
                  {dessert.price}
                </p>
                <p>
                  {dessert.category}
                </p>
                <p>
                  {dessert.quantity}
                </p>
              </div>
            ))}
          </Route>
          <Route path='/' exact={true}>
            Accueil
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
