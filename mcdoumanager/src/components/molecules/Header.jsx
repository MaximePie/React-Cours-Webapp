import React from 'react';
import {NavLink} from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <NavLink exact={true} to="/" className="Header__link" activeClassName="Header__link--active">Accueil</NavLink>
      <NavLink to="/sandwich" className="Header__link" activeClassName="Header__link--active">Sandwich</NavLink>
      <NavLink to="/dessert" className="Header__link" activeClassName="Header__link--active">Desserts</NavLink>
      <NavLink to="/boisson" className="Header__link" activeClassName="Header__link--active">Boisson</NavLink>
    </div>
  );
}
