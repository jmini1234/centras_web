import React, { Component } from 'react'
import fish from '../img/fish.png'
import './Header.css'
import { Link, withRouter } from 'react-router-dom';

class Header extends Component{
    handleChange(e) {
        localStorage.clear();
         window.location.reload();
    };

    _logout(){
        localStorage.clear();
        alert("로그아웃 되었습니다");
        window.location.reload();
    }
    render() {
        return (
        <div className="top_header">
            <div className="Header_Logo">
                <img src={fish} alt="centras_fish_pic"/>
                <p><Link to='/' style={{ textDecoration: 'none' }}>CENTRAS</Link></p>
            </div>
            <div className="header_list">
                <div className="project_intro"><Link to='/about' style={{ textDecoration: 'none' }}>프로젝트 소개</Link></div>
                <div className="add_nursery"><Link to='/register' style={{ textDecoration: 'none' }}>양식장 등록 및 조회</Link></div>
                
                <div className="my_nursery"><Link to='/my/mytemp' style={{ textDecoration: 'none' }}>내 양식장</Link></div>
                {
                    localStorage.getItem("AUTHORIZATION") ? <div className="logout" onClick = {() => this._logout() } style={{cursor:'pointer'}} >로그아웃</div> : 
                    <div className="login"><Link to='/login' style={{ textDecoration: 'none' }}>로그인</Link></div>
                    
                }
                
            </div>
        </div>)
      }
}

export default withRouter(Header)