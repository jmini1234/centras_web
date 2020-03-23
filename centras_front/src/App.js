import React, { Component } from 'react';
import Router from './Routes/Router';
import Header from './Layout/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header> 
        </Header>
        <Router/>
      </div>
    )
  }
}

export default App;
