import React from 'react';
import './App.css';
import Form from "./components/Form";
import Consignes from "./components/Consignes";
import { useSelector } from 'react-redux';

function App() {

  const { firstname, lastname, age } = useSelector(state => state);

  return (
    <div className="App">
      <Consignes/>
      <Form/>
      <div>
        <h2>Résultats</h2>
        <p>Firstname: {firstname}</p>
        <p>Lastname : {lastname}</p>
        <p>Age : {age}</p>
      </div>
    </div>
  );
}

export default App;
