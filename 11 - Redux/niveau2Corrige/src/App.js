import React from 'react';
import './App.css';
import Additionner from "./components/Additionner";
import Substractor from "./components/Substractor";
import Consignes from "./components/Consignes";

function App() {
  return (
    <div className="App">
      <Additionner/>
      <Substractor/>
      <Consignes/>
    </div>
  );
}

export default App;
