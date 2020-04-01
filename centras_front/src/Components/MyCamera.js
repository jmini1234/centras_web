import React, { Component } from 'react';
import My from './My';
import './MyCamera.css';

class MyCamera extends Component {
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
            /*
            fetch("http://localhost:3001/nursery/" + first + "/temperature", { headers })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                this.setState({temperature: result.temperature})
            });
            */
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
        /*
        fetch("http://localhost:3001/nursery/" + Idx + "/temperature", { headers })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            this.setState({temperature: result.temperature})
        });
        */
        
    }

    handleInput(e){

    }

    handleSubmit = e =>{
        
    }


    render(){
        return(
            <div>
                <My />
                <div className = "cameraPage">
                <div className = "cameraHeader">카메라 추가</div>
                <div className = "selectMsg"> 양식장 선택</div>
                <select className = "cameraSelect" value={this.state.nurseryIdx} onChange={this.handleChange}>
                {
                    this.state.nursery_list.map((nursery)=>
                    <option value = {nursery.idx}> {nursery.nursery_id} </option>
                    )
                }
                </select>
                <div class="inputForm" id="inputNursery" class="input-group mb-3" >
                    <input type="text" class="form-control" placeholder="카메라 ip"
                     name = "nursery_id" onChange = {this.handleChange}  value = {this.state.id}/>
                </div>
                </div>
            </div>
        )
    }


}

export default MyCamera;