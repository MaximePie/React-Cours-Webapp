import React from 'react';
import {useSelector} from "react-redux";

export default function Form(props) {

  const { firstname, lastname, age } = useSelector(state => state);

  return (
    <div className="Form">
      <label htmlFor="Firstname">
        Firstname
        <input value={firstname} type="text" onChange={(event) => props.onFirstnameUpdate(event.target.value)}/>
      </label>
      <label htmlFor="Lastname">
        Lastname
        <input value={lastname} type="text" onChange={(event) => props.onLastnameUpdate(event.target.value)}/>
      </label>
      <label htmlFor="Age">
        Age
        <input value={age} type="text" onChange={(event) => props.onAgeUpdate(event.target.value)}/>
      </label>
    </div>
  );
}
