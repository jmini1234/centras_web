import React, { Component } from 'react'
import fish from 'components/img/fish.png'
import './Login.css'

class Login extends Component{
    render() {

        const style_p = {
            color:'black',
        }

        const style_header={            
            margin : '150px 0 0 300px',
        }
        return (
        <div className="login-main">
        <div className="login-title">CENTRAS의 많은 서비스를 이용하려면 로그인 해주세요!</div>
        <div style={style_header} className="Header_Logo">
            <img src={fish} alt="centras_fish_pic"/>
            <p style={style_p}>CENTRAS</p>
        </div>
        <div className="login-form">
           <div class="inputForm" id="inputID" class="input-group mb-3">
                <input type="text" class="form-control" placeholder="아이디"/>
                <div class="input-group-append"></div>
           </div>
           <div class="inputForm" id="inputPW" class="input-group mb-3">
            <input type="password" class="form-control" placeholder="비밀번호"/>
            <div class="input-group-append"></div>
           </div>
           <button type="button" type="submit" class="btn btn-primary">로그인</button>
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
                    회원가입
                </div>
                하기
            </div>
        </div>
        </div>
        )
      }
}
document.body.style.backgroundColor = 'white'
export default Login