import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Register, MyTemp, Temp, Size, Streaming, Login, Signup, MyCamera } from './index';
import AuthRoute from '../AuthRoute';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <AuthRoute path="/register" component={Register} />
        <Route exact path="/login" component = {Login} />
        <Route exact path = "/users/signup" component={Signup}/> 
        <AuthRoute path = "/my/mytemp" component={MyTemp}/>
        <AuthRoute path = "/my/temp" component={Temp}/>
        <AuthRoute path = "/my/size" component={Size}/>
        <AuthRoute path = "/my/streaming" component={Streaming}/>   
        <AuthRoute path = "/my/camera" component={MyCamera}/> 
    </Switch>
);

export default Router;