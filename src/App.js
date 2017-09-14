import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Order from './components/Order'
import Inventory from './components/Inventory'

class App extends Component {
  render() {
    return (
      <div id="main">
        <div className="menu">
          <Header />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
