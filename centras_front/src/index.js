import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';
import {Switch} from "react-router-dom"
import './index.css'
import App from 'components/App/App.js'
import Login from 'Login/Login.js'
import Signup from 'Signup/Signup.js'
import Project from 'Project/Project.js'
import Nursery from 'Register/Register.js';


ReactDom.render(
  <Router history = {browserHistory}>
    <Switch>
      <Route path = "/" component = {App}/>
      <Route path = "/login" component = {Login}/>
      <Route path = "/signup" component = {Signup}/>
      <Route path = "/project" component = {Project}/>
      <Route path = "/nursery" component = {Nursery}/>
    </Switch>
   </Router>,
  document.querySelector('#root')
)
