import React, { Component } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import qs from "qs";
class Login extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            id : "",
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
        const loginInfo = {
            'id' : this.state.id,
            'pw' : this.state.pw
        };
        const login_info = {
            method: "POST",
            body: qs.stringify(loginInfo),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        console.log(login_info.body);
        fetch("http://localhost:3001/users/login", login_info)
        .then(res => res.json())
        .then(result => {
            if(result.code === 0){
                console.log(result);
                localStorage.setItem("AUTHORIZATION",result.token);
                alert("로그인 성공");
                window.location = '/';
            }
            else{
                alert("로그인 실패")
            }
            
        } )
    }

    render() {
        return (
        <div className="login-main">
        <div className="login-title">CENTRAS의 많은 서비스를 이용하려면 로그인 해주세요!</div>
        <div className="login-form">
           <div class="inputForm" id="inputID" class="input-group mb-3">
                <input type="text" class="form-control" placeholder="아이디"
                 name = "id" onChange = {this.handleChange}
                 value = {this.state.id}/>
                <div class="input-group-append"></div>
           </div>
           <div class="inputForm" id="inputPW" class="input-group mb-3">
            <input type="password" class="form-control" placeholder="비밀번호"
             name = "pw" onChange = {this.handleChange}
             value = {this.state.pw}/>
            <div class="input-group-append"></div>
           </div>
           <button  onClick={this.handleSubmit} type="button" type="submit" class="btn btn-primary">로그인</button>
            <div className="login-footer">아직 회원이 아니신가요? 
                <div className="signup_link">
                    <Link to='/users/signup' style={{ textDecoration: 'none' }}>
                    회원가입하기
                    </Link>
                </div>
            </div>
        </div>
        </div>
        )
      }
}
document.body.style.backgroundColor = 'white'
export default Login