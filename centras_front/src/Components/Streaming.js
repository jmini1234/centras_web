import React, { Component } from 'react';
import My from './My';
import './Streaming.css';


class Streaming extends Component{
    constructor(props){
        super(props);
        this.state = {
            nursery_list : [],
            nurseryIdx : -1,
            streaming : []
        };
        this.handleChange = this.handleChange.bind(this);

    }

    componentWillMount(){
        const headers = {
            "x-access-token": localStorage.getItem("AUTHORIZATION"),
            "Content-Type" : "application/x-www-form-urlencoded"
        }
        var first;


        fetch("http://localhost:3001/nursery/list" , { headers })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            this.setState({nursery_list: result.data})
            this.setState({nurseryIdx : result.data[0].idx})
            var first = result.data[0].idx;
            fetch("http://localhost:3001/nursery/" + first + "/streaming", { headers })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                this.setState({streaming: result.streaming})
            });
        });
    }

    handleChange(e){
        const headers = {
            "x-access-token": localStorage.getItem("AUTHORIZATION"),
            "Content-Type" : "application/x-www-form-urlencoded"
        }
        console.log(e.target.value);
        this.setState({nurseryIdx: e.target.value});

        var Idx = e.target.value;
        fetch("http://localhost:3001/nursery/" + Idx + "/streaming", { headers })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            this.setState({streaming: result.streaming})
        });
    }

    render(){
        return(
            <div>
                <My />
                <div className = "streamingPage">
                <div className = "streamingHeader">스트리밍</div>
                <div className = "selectMsg"> 양식장 선택</div>
                <select className = "cameraSelect" value={this.state.nurseryIdx} onChange={this.handleChange}>
                {
                    this.state.nursery_list.map((nursery)=>
                    <option value = {nursery.idx}> {nursery.nursery_id} </option>
                    )
                }
                </select>
                <div className = "streamingList">
                {
                    this.state.streaming.map((stream) =>
                    <div> {stream.ip} </div>
                    ) 
                }  
                </div>
                </div>
                
            </div>
        );
    }
}
export default Streaming;