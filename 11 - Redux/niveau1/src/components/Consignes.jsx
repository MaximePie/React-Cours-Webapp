import React from 'react';

export default function Consignes() {
  return (
    <div className="Consignes">
      <p>En utilisant le hook useSelector, afficher le compteur dans le composant App</p>
      <div>
        <p>Dans le composant Counter, créer un bouton "Décrémenter" qui déclenche une méthode 'decrement'</p>
        <p>Dans la méthode decrement, appeler la méthode dispatch en lui générant l'événement 'DECREMENT'</p>
      </div>
      <div>
        <p>
          En s'appuyant sur les exemples précédents, créer un mécanisme dans le reducer.js qui permette de
          remettre le counter à zéro avec un événement 'RESET'.
        </p>
      </div>
    </div>
  );
}
