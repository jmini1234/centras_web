import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Login, Size, Temp  } from './index';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/size" component={Size} />
    <Route path="/temp" component={Temp} />
  </Switch>
);

export default Router;
