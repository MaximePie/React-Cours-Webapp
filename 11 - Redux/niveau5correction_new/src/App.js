import React from "react";
import './App.css';
import './index.css';
import Consignes from "./components/Consignes";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <Consignes/>
      <Calculator/>
    </div>
  );
}

export default App;
