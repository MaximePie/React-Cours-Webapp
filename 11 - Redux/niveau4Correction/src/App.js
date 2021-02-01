import React from 'react';
import './App.css';
import Form from "./components/Form";
import Consignes from "./components/Consignes";

function App() {

  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [age, setAge] = React.useState('');

  return (
    <div className="App">
      <Consignes/>
      <Form
        onFirstnameUpdate={updateFirstname}
        onLastnameUpdate={updateLastname}
        onAgeUpdate={(value) => setAge(value) /* Ceci est une autre manière de l'écrire, mais le résultat est le même*/}
      />
      <div>
        <h2>Résultats</h2>
        <p>Firstname: {firstname}</p>
        <p>Lastname : {lastname}</p>
        <p>Age : {age}</p>
      </div>
    </div>
  );

  function updateFirstname(value) {
    setFirstname(value);
  }

  function updateLastname(value) {
    setLastname(value)
  }
}

export default App;
