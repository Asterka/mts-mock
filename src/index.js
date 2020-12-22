import React from 'react';
import ReactDOM from 'react-dom';

//Compile and import the main css file
import './styles/App.scss';


import Login from './components/Login';

ReactDOM.render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);
