// 인증이 필요한 컴포넌트를 위한 전용 라우트
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ component: Component, render, ...rest }){
    var Login = false;
    if(localStorage.getItem("AUTHORIZATION")!=null){
        var token = localStorage.getItem("AUTHORIZATION");
        var jwt_decode = require('jwt-decode');
        var decodeToken = jwt_decode(token);
        var dateNow = new Date();
        Login = true;
        if(decodeToken.exp > dateNow.getTime()){
            alert("로그인이 필요한 서비스입니다!");
            Login = false;
            console.log(Login);
        } 
    }  
    else{
        alert("로그인이 필요한 서비스입니다!");
    } 
    return (
        <Route
        {...rest}
        render = {props => Login ? ( render ? render() : <Component/>
        ) : ( 
            <Redirect to = {{ pathname : '/login'}} />
        )
        
        }
        />
    );
}

export default AuthRoute;