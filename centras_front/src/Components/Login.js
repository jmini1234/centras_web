import React, { Component } from 'react'
import fish from '../img/fish.png'
import './Login.css'
import { Link } from 'react-router-dom';
import qs from "qs";
import Header from '../Layout/Header';
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
        .then(response => { 
            console.log(response.json())
            if(response.status === 400){
                alert("로그인 실패")
            }
            else{
                alert("로그인 성공")
            }
        })
        .catch(error => {
            console.log(error.response)
        });

    }

    render() {
        const style_header={            
            margin : '50px 0 0 300px',
        }
        return (
        <div className="login-main">
        <div className="login-title">CENTRAS의 많은 서비스를 이용하려면 로그인 해주세요!</div>
        <div style={style_header} className="Header_Logo">
            <img src={fish} alt="centras_fish_pic"/>
            <p>CENTRAS</p>
        </div>
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
            <div className="find">
                <div className="find_id">
                    아이디 찾기
                </div>
                <div className="find_pw">
                    비밀번호 찾기
                </div>
            </div>
           

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