import React, { Component } from 'react';
import My from './My';
class MyTemp extends Component {
    constructor(props){
        super(props);
        this.state = {
            nursery_list : [],
            nurseryIdx : 1
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const headers = {
            "x-access-token": localStorage.getItem("AUTHORIZATION"),
            "Content-Type" : "application/x-www-form-urlencoded"
        }
        console.log(e.target.value);
        this.setState({
            nurseryIdx : e.target.value
        });
        const { nurseryIdx } = this.state;
        console.log(nurseryIdx);
        fetch("http://localhost:3001/nursery/" + nurseryIdx + "/temperature", { headers })
        .then(res => res.json())
        .then(result => console.log(result));
        console.log(this.state.nursery_list);
    }

    componentWillMount(){
        const headers = {
            "x-access-token": localStorage.getItem("AUTHORIZATION"),
            "Content-Type" : "application/x-www-form-urlencoded"
        }
        fetch("http://localhost:3001/nursery/list" , { headers })
        .then(res => res.json())
        .then(result => this.setState({nursery_list: result.data}));
    }
    render(){
        return(
            <div>
                <My />
                <h1>온도</h1>
                <select value={this.state.value} onChange={this.handleChange}>
                {
                    this.state.nursery_list.map((nursery)=>
                    <option value = {nursery.idx}> {nursery.nursery_id} </option>
                    )
                }
                </select>
            </div>
        )
    }
}


export default MyTemp;