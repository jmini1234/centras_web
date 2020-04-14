import React, { Component } from 'react'
import fish from '../img/fish.png'
import './Signup.css'
import qs from "qs"
const style_p = {
    color:'black',
}

const style_btn = {
    'margin-left': '260px',
    'width': '180px',
    'height': '60px',
    'margin-top': '50px',
    'border-radius': '5%'
}


class Signup extends Component{

    constructor(props){
        super(props);
        this.state = {
            id : "",
            nickname : "",
            email : "",
            pw : ""
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
        const signupInfo = {
            'id' : this.state.id,
            'pw' : this.state.pw,
            'nickname' : this.state.nickname,
            'email' : this.state.email
        };
        const signup_info = {
            method: "POST",
            body: qs.stringify(signupInfo),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        console.log(signup_info.body);
        fetch("http://localhost:3001/users/sign_up", signup_info)
        .then(response => { 
            console.log(response.json())
            if(response.status == 400){
                alert("중복된 아이디입니다")
            }
            else{
                alert("회원가입에 성공했습니다!")
                window.location = '/';
            }
        })
        .catch(error => {
            console.log(error.response)
        });

    }
    render() {
        return (
        <div className="signup-main">
        <div className="header-top">
            <div className="Header_Logo">
                    <img src={fish} alt="centras_fish_pic"/>
                    <p style={style_p}>CENTRAS</p>
            </div>
            <p id="signup_header_title"> 회원가입 </p>
        </div>

            <div className="signup-form">
            <div className="signup-field">
                <span className="signup-tag" >아이디</span>
                <div class="inputForm" id="signup_inputID" class="input-group mb-3">
                        <input type="text" class="form-control" 
                        name = "id" onChange = {this.handleChange}
                        value = {this.state.id} />
                        <div class="input-group-append"></div>
                </div>
            </div>

            <div className="signup-field">
                <span className="signup-tag">닉네임</span>
                <div class="inputForm" id="signup_inputNickname" class="input-group mb-3">
                        <input type="text" class="form-control"
                        name = "nickname" onChange = {this.handleChange}
                        value = {this.state.nickname}/>
                        <div class="input-group-append"></div>
                </div>
            </div>
            <div className="signup-field">
                <span className="signup-tag">이메일</span>
                <div class="inputForm" id="signup_inputEmail" class="input-group mb-3">
                    <input type="text" class="form-control"
                    name = "email" onChange = {this.handleChange}
                    value = {this.state.email}/>
                    <div class="input-group-append"></div>
                </div>
            </div>

            <div className="signup-field">
                <span className="signup-tag">비밀번호</span>
                <div class="inputForm" id="signup_inputPW" class="input-group mb-3">
                    <input type="password" class="form-control"
                    name = "pw" onChange = {this.handleChange}
                    value = {this.state.pw}/>
                    <div class="input-group-append"></div>
                </div>
            </div>
            <button onClick={this.handleSubmit} type="button" 
            type="submit" class="btn btn-primary" style={style_btn}>회원가입
            </button>
            </div>
        </div>
        )
      }
}

export default Signup