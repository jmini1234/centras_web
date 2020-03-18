import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import My from './Components/My';
import styled from 'styled-components';
import Header from './Layout/Header';
import './App.css';
import Router from './Routes/Router';
import main1 from './img/centras_main1.JPG'
const style_bg={
  'background':'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
}
class App extends Component {
  render() {
    return (
      <div>
        <img alt="main_bg" style={style_bg} src={main1} className="main_bg"></img>
        <Header />
        <Router />
      </div>
    )
  }
}

export default withRouter(App);
