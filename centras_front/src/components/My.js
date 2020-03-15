import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import {StyleSheet, Text, View} from 'react-native';
import Router from '../Routes/Router';
import Temp from './Temp';
import Size from './Size';
import Streaming from './Streaming';

const My = () => (
    <div>
        <h2>내 양식장</h2>
        <ul>
            <li>
                <Link to='/my/temp'>수온</Link>        
            </li>
            <li>
                <Link to='/my/size'>크기</Link>
            </li>
            <li>
                <Link to='/my/streaming'>스트리밍</Link>
            </li>
        </ul>
    </div>
)

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