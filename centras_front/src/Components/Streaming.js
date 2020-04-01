import React, { Component } from 'react';
import My from './My';
import './Streaming.css';


class Streaming extends Component{
    render(){
        return(
            <div>
                <My />
                <div className = "streamingPage">
                <div className = "streamingHeader">스트리밍</div>
                </div>
            </div>
        );
    }
}
export default Streaming;