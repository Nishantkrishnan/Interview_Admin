import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Menu from './components/Menu';
import Roles from './components/Menu/Roles';


function App() {
  return (
    <Router>
      <Provider store={store}>
    <Route exact path = '/' component = {Login} />
    <Route  path = '/menu' component = {Menu} />
       </Provider>
    </Router>
  );
}

export default App;
