import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import * as React from "react";

function App() {
  const [data, setData] = React.useState([]);

  return (
    <div className="App">
      <button onClick={fetchCatsFacts}>Search</button>
      {data.map((fact, index) => (
        <p key={index}>{fact.text}</p>
      ))}
    </div>
  );

  function fetchCatsFacts() {
    axios.get('https://cat-fact.herokuapp.com/facts').then(function(resultats) {
      setData(resultats.data);
    });
  }

}

export default App;
