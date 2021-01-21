import React from 'react';
import {Link, NavLink} from "react-router-dom";

export default function Header() {
    return (
        <div className="Header">
            <h1>Header</h1>
            <NavLink activeClassName="active" to="/accueil">Accueil</NavLink>
            <NavLink activeClassName="active2" to="/home">Home</NavLink>
            <NavLink activeClassName="active" to="/page3">Page 3</NavLink>
            <NavLink activeClassName="active" to="/profil">Le profil</NavLink>
            <NavLink activeClassName="active" to="/page/zouzou">Page Zouzou</NavLink>
            <NavLink activeClassName="active" to="/page/Bobby">Page Bobby</NavLink>
        </div>
    );
}
