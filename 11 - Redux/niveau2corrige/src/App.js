import React from 'react';
import './App.css';
import Additionner from "./components/Additionner";
import Subtractor from "./components/Subtractor";
import Consignes from "./components/Consignes";

function App() {
  return (
    <div className="App">
      <Additionner/>
      <Subtractor/>
      <Consignes/>
    </div>
  );
}

export default App;
