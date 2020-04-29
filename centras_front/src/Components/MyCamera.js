import React, { Component } from 'react';
import My from './My';
import './MyCamera.css';
import qs from "qs";

class MyCamera extends Component {
    constructor(props){
        super(props);
        this.state = {
            camera_ip : "",
            camera_name : "",
            nursery_list : [],
            nurseryIdx : -1
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);

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
            this.setState({nurseryIdx : result.data[0].idx})
        });
    }

    handleChange(e){
        const headers = {
            "x-access-token": localStorage.getItem("AUTHORIZATION"),
            "Content-Type" : "application/x-www-form-urlencoded"
        }
        this.setState({nurseryIdx: e.target.value});
    }

    handleInput(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    };
    handleSubmit = e =>{
        e.preventDefault();
        const cameraInfo = {
            'ip' : this.state.camera_ip,
            'name' : this.state.camera_name
        };
        const str = this.state.camera_ip;
        const str2 = this.state.camera_name;
        var blank_pattern =  /^\s+|\s+$/g;
        if(str.replace(blank_pattern,'') == "" || str2.replace(blank_pattern,'') == ""){
          alert("공백은 입력할 수 없습니다");
        }
        else{
            const camera_info = {
                method: "POST",
                body: qs.stringify(cameraInfo),
                headers: {
                    'x-access-token' : localStorage.getItem("AUTHORIZATION"),
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            var idx = this.state.nurseryIdx;
            fetch("http://localhost:3001/nursery/" + idx + "/streaming", camera_info)
            .then(response => { 
            response.json().then(
                result => {
                    if(response.status == 400){
                        alert("등록 실패")
                    }
                    else{
                        alert("등록 성공")
                        window.location.reload();
                    }
                }
            )
            })
            .catch(error => {
                console.log(error.response)
            });
        }
    }
    render(){
        return(
            <div>
                <My />
                <div className = "cameraPage">
                <div className = "selectMsg">양식장 선택</div>
                <select className = "cameraSelect" value={this.state.nurseryIdx} onChange={this.handleChange}>
                {
                    this.state.nursery_list.map((nursery)=>
                    <option value = {nursery.idx}> {nursery.nursery_id} </option>
                    )
                }
                </select>
                <div className="camerainputForm" id="camera_ip"> 
                    <div class="inputForm" id="inputCameraIp" class="input-group mb-3">
                        <input type="text" class="camera-form-control" placeholder="카메라 ip"
                            name = "camera_ip" onChange = {this.handleInput} value = {this.state.id}/>
                    </div>
                    <div class="inputForm" id="inputCameraName" class="input-group mb-3">
                        <input type="text" class="camera-form-control" placeholder="카메라 이름"
                            name = "camera_name" onChange = {this.handleInput} value = {this.state.id}/>
                    </div>
                </div>
                <button className = "btn btn-primary" onClick={this.handleSubmit} type="button" type="submit">등록하기</button>
                </div>
            </div>
        )
    }
}

export default MyCamera;