import React from 'react';
import './App.css';
import Additionner from "./components/Additionner";
import Consignes from "./components/Consignes";

function App() {
  return (
    <div className="App">
      <Additionner/>
      {/*<Substractor/>*/}
      <Consignes/>
    </div>
  );
}

export default App;
