import React from "react";
import './App.css';
import Consignes from "./components/Consignes";

function App() {

  return (
    <div className="App">
      <Consignes/>
      <div className="Calculator">
        <div>
          <span onClick={}> + </span>
          <span onClick={}> - </span>
          <span onClick={}> x </span>
          <span onClick={}> / </span>
        </div>
      </div>
    </div>
  );
}

export default App;
