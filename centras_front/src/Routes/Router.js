import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Register, My, Temp, Size, Streaming, Login, Signup } from './index';

const Router = () => (
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/my" component={My} />
    <Route exact path="/login" component = {Login} />
    <Route exact path = "/users/signup" component={Signup}/> 
    <Route exact path = "/my/temp" component={Temp}/>
    <Route exact path = "/my/size" component={Size}/>
    <Route exact path = "/my/streaming" component={Streaming}/>    
    </Switch>
   
    
);

export default Router;