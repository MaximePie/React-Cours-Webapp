// ./src/js/app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../css/app.css';
import Home from './components/Home';

ReactDOM.render(
  <BrowserRouter><Home />dada</BrowserRouter>,
  document.getElementById('root')
);
