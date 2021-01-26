import logo from './logo.svg';
import './App.css';
import React from 'react';
// ...
// Redux
import { createStore } from 'redux';
// Provider pour globaliser le store
import { Provider } from 'react-redux';

import reducer from './calculatrice';
import Counter from "./Counter";

const store = createStore(reducer);

function App() {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <div className="App">
        <h1>State depuis App</h1>
        <Counter/>
      </div>
    </Provider>
  );
}

export default App;
