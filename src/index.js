import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import {useContext, createContext, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Login from './components/Login';

ReactDOM.render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);
