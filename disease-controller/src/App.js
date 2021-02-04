import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import * as React from "react";

const apiUrl = 'https://cat-fact.herokuapp.com';

function App() {
  const [factsList, setFactsList] = React.useState([]);

  React.useEffect(() => {
    axios.get(apiUrl + '/facts').then(function(resultat) {
      setFactsList(resultat.data);
    });
  }, []);

  console.log(factsList);

  return (
    <div className="App">
      {factsList.map(fact => (
        <div>
          <p>{fact.text}</p>
        </div>
      ))}
    </div>
  );

}

export default App;
