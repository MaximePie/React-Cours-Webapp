import React from 'react';

export default function Consignes() {
  return (
    <div className="Consignes">
      <p>
        Voici un mécanisme de formulaire avec l'utilisation de useState, Modifier ce code (App.js et Form.js) de
        à ce que :
      </p>
      <ul>
        <li>Tous les useState sont remplacés par la gestion d'un reducer</li>
        <li>Le reducer traite quatre événements : </li>
        <li>HANDLE_FIRSTNAME_CHANGE, qui met à jour le state de firstname</li>
        <li>HANDLE_LASTNAME_CHANGE, qui met à jour le state de lastname</li>
        <li>HANDLE_AGE_CHANGE, qui met à jour le state de age</li>
        <li>RESET, qui remet le state à son état initial</li>
        <li>Dans App.js, on affiche les différentes valeurs contenues dans le store</li>
      </ul>
    </div>
  );
}
