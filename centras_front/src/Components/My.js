import React, {Component} from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import {StyleSheet, Text, View} from 'react-native';
import Router from '../Routes/Router';
import Temp from './Temp';
import Size from './Size';
import Streaming from './Streaming';
import Header from '../Layout/Header';
import './My.css'

class My extends Component{
    
    componentWillMount(){
        if(localStorage.getItem("AUTHORIZATION")==null){
            alert("로그인이 필요한 서비스입니다!");
            window.location = '/';

        }
    }

    render(){
        return(
            <div className = "myMain">
            <div className = "myHeader">내 양식장</div>
            <div>
                <div className = "temp">
                    <Link to='/my/mytemp' style={{ textDecoration: 'none' }}>수온</Link>        
                </div>
                <div className = "size">
                    <Link to='/my/size' style={{ textDecoration: 'none' }}>크기</Link>
                </div>
                <div className = "streaming">
                    <Link to='/my/streaming' style={{ textDecoration: 'none' }}>스트리밍</Link>
                </div>
            </div>
            </div>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    submenu: {
        flex: 1,
    },
    content: {
        flex:1,
    },

});

export default My;