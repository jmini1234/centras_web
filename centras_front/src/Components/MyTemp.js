import React, { Component } from 'react';
import My from './My';
import Header from '../Layout/Header';
class MyTemp extends Component {
    constructor(props){
        super(props);
        this.state = {
            nursery_list : [],
            nurseryIdx : -1
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount(){
        const headers = {
            "x-access-token": localStorage.getItem("AUTHORIZATION"),
            "Content-Type" : "application/x-www-form-urlencoded"
        }
        fetch("http://localhost:3001/nursery/list" , { headers })
        .then(res => res.json())
        .then(result => {
            this.setState({nursery_list: result.data})
            }  
        );
        /*
        fetch("http://localhost:3001/nursery/" + Idx + "/temperature", { headers })
        .then(res => res.json())
        .then(result => console.log(result));
        */
    }

    handleChange(e){
        const headers = {
            "x-access-token": localStorage.getItem("AUTHORIZATION"),
            "Content-Type" : "application/x-www-form-urlencoded"
        }
        console.log(e.target.value);
        this.setState({nurseryIdx: e.target.value});
        var Idx = e.target.value;
        fetch("http://localhost:3001/nursery/" + Idx + "/temperature", { headers })
        .then(res => res.json())
        .then(result => console.log(result));
        //console.log(this.state.nursery_list);
    }

    
    render(){
        return(
            <div>
                <My />
                <h1>온도</h1>
                <select value={this.state.nurseryIdx} onChange={this.handleChange}>
                {
                    this.state.nursery_list.map((nursery)=>
                    <option value = {nursery.idx}> {nursery.nursery_id} </option>
                    )
                }
                </select>
                <div>
                    
                </div>
            </div>
        )
    }
}


export default MyTemp;