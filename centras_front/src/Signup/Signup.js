import React, { Component } from 'react'
import fish from 'components/img/fish.png'
import './Signup.css'

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
                        <input type="text" class="form-control"/>
                        <div class="input-group-append"></div>
                </div>
            </div>

            <div className="signup-field">
                <span className="signup-tag">닉네임</span>
                <div class="inputForm" id="signup_inputNickname" class="input-group mb-3">
                        <input type="text" class="form-control"/>
                        <div class="input-group-append"></div>
                </div>
            </div>
            <div className="signup-field">
                <span className="signup-tag">이메일</span>
                <div class="inputForm" id="signup_inputEmail" class="input-group mb-3">
                    <input type="text" class="form-control"/>
                    <div class="input-group-append"></div>
                </div>
            </div>

            <div className="signup-field">
                <span className="signup-tag">비밀번호</span>
                <div class="inputForm" id="signup_inputPW" class="input-group mb-3">
                    <input type="password" class="form-control"/>
                    <div class="input-group-append"></div>
                </div>
            </div>
            <button type="button" type="submit" class="btn btn-primary" style={style_btn}>회원가입</button>

            </div>
        </div>
        )
      }
}

export default Signup