import React, { Component } from 'react'
import './Signup.css'
import qs from "qs"

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
            if(response.status === 400){
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
            <div className="signup-form">
            <div className="signup-field">
                <div className="signup-header-title">회원가입</div>
                <span className="signup-tag" >아이디</span>
                <div className="inputForm" id="signup_inputID" className="input-group mb-3">
                        <input type="text" className="form-control" 
                        name = "id" onChange = {this.handleChange}
                        value = {this.state.id} />
                        <div className="input-group-append"></div>
                </div>
            </div>

            <div className="signup-field">
                <span className="signup-tag">닉네임</span>
                <div className="inputForm" id="signup_inputNickname" className="input-group mb-3">
                        <input type="text" className="form-control"
                        name = "nickname" onChange = {this.handleChange}
                        value = {this.state.nickname}/>
                        <div className="input-group-append"></div>
                </div>
            </div>
            <div className="signup-field">
                <span className="signup-tag">이메일</span>
                <div className="inputForm" id="signup_inputEmail" className="input-group mb-3">
                    <input type="text" className="form-control"
                    name = "email" onChange = {this.handleChange}
                    value = {this.state.email}/>
                    <div className="input-group-append"></div>
                </div>
            </div>

            <div className="signup-field">
                <span className="signup-tag">비밀번호</span>
                <div className="inputForm" id="signup_inputPW" className="input-group mb-3">
                    <input type="password" className="form-control"
                    name = "pw" onChange = {this.handleChange}
                    value = {this.state.pw}/>
                    <div className="input-group-append"></div>
                </div>
            </div>
            <button onClick={this.handleSubmit} type="button" 
            type="submit" className="btn btn-primary" style={style_btn}>회원가입
            </button>
            </div>
        </div>
        )
      }
}

export default Signup