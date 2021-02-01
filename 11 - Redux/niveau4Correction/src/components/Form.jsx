import React from 'react';

export default function Form(props) {
  return (
    <div className="Form">
      <label htmlFor="Firstname">
        Firstname
        <input type="text" onChange={(event) => props.onFirstnameUpdate(event.target.value)}/>
      </label>
      <label htmlFor="Lastname">
        Lastname
        <input type="text" onChange={(event) => props.onLastnameUpdate(event.target.value)}/>
      </label>
      <label htmlFor="Age">
        Age
        <input type="text" onChange={(event) => props.onAgeUpdate(event.target.value)}/>
      </label>
    </div>
  );
}
