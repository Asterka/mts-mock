import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/App.scss"

import Header from './components/Header';
import Main from './components/Main';



ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);
