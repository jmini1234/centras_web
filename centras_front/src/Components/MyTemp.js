import React, { Component } from 'react';
import My from './My';
import './MyTemp.css';

class MyTemp extends Component {
    constructor(props){
        super(props);
        this.state = {
            nursery_list : [],
            nurseryIdx : -1,
            temperature : []
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
            first = result.data[0].idx;
            fetch("http://localhost:3001/nursery/" + first + "/temperature", { headers })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                this.setState({temperature: result.temperature})
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
        fetch("http://localhost:3001/nursery/" + Idx + "/temperature", { headers })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            this.setState({temperature: result.temperature})
        });
    }

    render(){
        console.log(this.state.temperature);
        return(
            <div className = "tempMain">
                <My />
                <div className = "tempPage">
                    <div className = "tempHeader">실시간 수온</div>
                    <div className = "selectMsg"> 양식장 선택</div>
                    <select className = "tempSelect" value={this.state.nurseryIdx} onChange={this.handleChange}>
                    {
                        this.state.nursery_list.map((nursery)=>
                        <option value = {nursery.idx}> {nursery.nursery_id} </option>
                        )
                    }
                    </select>
                    <div className = "tempList">
                    {
                        this.state.temperature.map((temper) =>
                            <div> {temper.temp} {temper.update_time} </div>
                        ) 
                    }  
                    </div>
                </div>
            </div>
        )
    }
}


export default MyTemp;