
import React, { Component } from 'react'
import main1 from '../img/centras_main1.JPG'
import qs from "qs";
import './Register.css'
import './NuseryList';
import NurseryList from './NuseryList';
const style_bg={
  'background':'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
}

class Register extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      nursery_id	: "" ,
      nursery_list : []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  handleSubmit = e => {
    e.preventDefault();
    const nurseryInfo = {
      'nursery_id' : this.state.nursery_id
    };
    const str = this.state.nursery_id;
    var blank_pattern =  /^\s+|\s+$/g;
    if(str.replace(blank_pattern,'') == ""){
      alert("공백은 입력할 수 없습니다");
      console.log("dd");
    }
    else{
      const nursery_info = {
        method: "POST",
        body: qs.stringify(nurseryInfo),
        headers: {
            'x-access-token' : localStorage.getItem("AUTHORIZATION"),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    console.log(nursery_info.body);
    fetch("http://localhost:3001/nursery", nursery_info)
    .then(response => { 
      console.log(response);
      response.json().then(
          result => {
              console.log(result);
              if(response.status === 400){
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

  render() {
    return (
    <div className = "project">
        <div className="project_header">
        <img alt="sub_bg" style={style_bg} src={main1} className="sub_bg"></img>
        </div>
      <div className="register-main">
        <div className="nursery-register">
            <div className="register_title">양식장 등록</div>
            <p className="register-sub-title">관리할 양식장을 추가하고 싶으시면 새로운 양식장 등록을 해주세요!</p>
            <div class="inputForm" id="inputNursery" class="input-group mb-3" >
                    <input type="text" class="form-control" placeholder="양식장 이름"
                     name = "nursery_id" onChange = {this.handleChange}  value = {this.state.id}/>
            </div>
            <button onClick={this.handleSubmit} style={{
                width :'180px',
                height: '60px',
                position: 'absolute',
                bottom: '270px',
                left: '670px',
                'border-radius': '5%',
                margin: '0'
            }} type="button" type="submit" class="btn btn-primary">등록하기</button>
        </div>
        <div className="my_nursery_list">
            <div>내 양식장</div>
            <div className="my_nursery_list_detail">
              <NurseryList />
            </div>
        </div>
      </div>
    </div>

    )
  }
  
}

export default Register
