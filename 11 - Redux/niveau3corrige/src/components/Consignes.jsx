import React from 'react';

export default function Consignes() {
  return (
    <div className="Consignes">
      <p>Créer une calculatrice en utilisant Redux.</p>
      <p>Créer un fichier reducer.js qui contiendra notre reducer</p>
      <p>Le reducer doit gérer 5 types d'événements : </p>
      <ul>
        <li>'ADD' qui sert à additionner la valeur récupérée en paramètre au state</li>
        <li>'SUBSTRACT' qui sert à soustraire la valeur récupérée en paramètre au state</li>
        <li>'MULTIPLY' qui sert à multiplier la valeur récupérée en paramètre au state</li>
        <li>'DIVIDE' qui sert à diviser la valeur récupérée en paramètre au state</li>
        <li>'RESET' qui sert à remettre la valeur à 0</li>
      </ul>

      <p>Afficher le contenu du store depuis le fichier App.js </p>
    </div>
  );
}
