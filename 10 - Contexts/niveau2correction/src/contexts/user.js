import {createContext, useState} from "react";

// Créer le contexte ici

// Stocker l'âge de l'utilisateur => Valeur
// Modifier l'âge de l'utilisateur => Méthode, qui permette de modifier cette valeur

const userAgeContextInitialValue = {
  age: 0,
  handleAgeChange: () => {}
};

export const userAgeContext = createContext(userAgeContextInitialValue)


/**
 * Ce composant retourne le userContext.Provider ainsi que ses enfants (children) reçus via les props
 * State : User, mis à jour avec setUser, valeur par défaut : {isConnected: false, firstname: 'Bobby'}
 * Ce composant possède une méthode login qui va modifier la valeur de user, de manière à ce que user.isConnected = true.
 */
export default function UserContextManager({children}) {

  const [age, setAge] = useState(10);

  return (
    <userAgeContext.Provider value={{age, handleAgeChange}}>
      {children}
    </userAgeContext.Provider>
  );

  function handleAgeChange(age) {
    if (age < 0) {
      console.log("Erreur");
    }
    else {
      setAge(age);
    }
  }
}

