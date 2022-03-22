import './App.css';
import React from "react";
import Profil from "./components/molecules/Profil"
import UserContextManager from "./contexts/user"

function App() {
  return (
    <UserContextManager>
      <div className="App">
        <Profil/>
      </div>
    </UserContextManager>
  );
}

export default App;
