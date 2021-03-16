import React from 'react';
import './App.css';
import Form from "./components/Form";
import Consignes from "./components/Consignes";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Consignes/>
      <Form
        onFirstnameUpdate={updateFirstname}
        onLastnameUpdate={updateLastname}
        onAgeUpdate={updateAge}
      />
      <div>
        <h2>Résultats</h2>
        <p>Firstname: {state.firstname}</p>
        <p>Lastname : {state.lastname}</p>
        <p>Age : {state.age}</p>
      </div>
      <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
    </div>
  );

  function updateAge(value) {
    dispatch({
      type: 'AGE_CHANGE',
      data: value,
    })
  }

  function updateFirstname(value) {
    dispatch({
      type: "FIRSTNAME_CHANGE",
      data: value,
    })
  }

  function updateLastname(value) {
    dispatch({
      type: 'LASTNAME_CHANGE',
      data: value,
    })
  }
}

export default App;
