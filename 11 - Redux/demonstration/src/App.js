import logo from './logo.svg';
import './App.css';
import * as React from "react";
import DromadaireBleu from "./components/DromadaireBleu";
import {useSelector} from "react-redux";

function App() {
  const { counter } = useSelector(state => state);

  return (
    <div className="App">
      <h2>Compteur : {counter}</h2>
      <DromadaireBleu onClick={() => {}}/>
    </div>
  );
}

export default App;
