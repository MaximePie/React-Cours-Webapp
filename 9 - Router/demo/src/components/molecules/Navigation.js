import {Link, NavLink} from "react-router-dom";
import React from "react"

export default function Navigation() {
  return (
    <div className="Navigation">
      <NavLink to={"/"}>Accueil</NavLink>
      <NavLink to={"/profil/adeline"}>Adeline</NavLink>
      <NavLink to={"/profil/alexandre"}>Alexandre</NavLink>
      <NavLink to={"/settings"}>Settings</NavLink>
    </div>
  )
}