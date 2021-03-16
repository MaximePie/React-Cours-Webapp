import React from 'react';

export default function Consignes() {
  return (
    <div className="Consignes">
      <div>
        <ul>
          <li>Dans reducer.js, créer un nouveau type d'action 'ADD' qui permettra d'ajouter la valeur reçue au state courant</li>
          <li>
            Pour envoyer une valeur à une action, ajouter une nouvelle clé number dans votre appel de dispatch. Exemple sur
            le composant Additionner.jsx
          </li>
          <li>Faire en sorte que lorsque l'on clique sur + 1, on ajoute 1 au store. Si on clique sur +4, on ajoute 4 au store.</li>
          <li>Afficher le state du reducer dans le composant Additionner</li>
        </ul>

        <ul>
          <li>
            Créer un composant Substractor.jsx qui permette de reproduire le comportement de l'Additionner, mais
            avec des soustractions.
          </li>
        </ul>
      </div>
    </div>
  );
}
