import React from 'react';
import {
  useDispatch, useSelector
} from 'react-redux';

export default function Form() {
  const dispatchMethod = useDispatch();
  const { firstname, lastname, age } = useSelector(state => state);

  const handle_firstName = event => {
    dispatchMethod({type: 'HANDLE_FIRSTNAME_CHANGE', data: event.currentTarget.value})
  }

  const handle_lastName = event => {
    dispatchMethod({type: 'HANDLE_LASTNAME_CHANGE', data: event.currentTarget.value})
  }

  const handle_age = event => {
    dispatchMethod({type: 'HANDLE_AGE_CHANGE', data: event.currentTarget.value})
  }

  const reset = () => {
    dispatchMethod({type: 'RESET'})
  }

  return (
    <div className="Form">
      <label htmlFor="Firstname">
        Firstname
        <input type="text" onChange={event => handle_firstName(event)} value={firstname}/>
      </label>
      <label htmlFor="Lastname">
        Lastname
        <input type="text" onChange={event => handle_lastName(event)} value={lastname}/>
      </label>
      <label htmlFor="Age">
        Age
        <input type="text" onChange={event => handle_age(event)} value={age}/>
      </label>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
