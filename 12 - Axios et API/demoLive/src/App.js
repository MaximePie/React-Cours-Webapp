import './App.css';
import * as React from "react";
import axios from "axios";
import {useState} from "react";

const url = 'https://cat-fact.herokuapp.com';

function App() {

  const [facts, setFacts] = useState([]);
  console.log(facts);
  return (
    <div className="App">
      <button onClick={fetchFacts}>Rechercher</button>
      {facts.map(fact => (
        <p>{fact.text}</p>
      ))}
    </div>
  );

  /**
   * Récupérer des données avec Axios et les placer dans le state des facts.
   */
  function fetchFacts() {
    axios.get(`${url}/facts`).then(response => {
      const facts = response.data;
      setFacts(facts);
    });
  }
}

export default App;
