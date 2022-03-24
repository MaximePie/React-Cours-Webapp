import {useParams} from "react-router-dom";
import React from "react";

export default function Profil() {

  const parameters = useParams();

  console.log(parameters);

  return (
    <div className="Profil">
      <h2>Profil page</h2>
      <p>Bonjour {parameters.username}</p>
    </div>
  )
}