import React, { Component } from 'react'
import fish from 'components/img/fish.png'
import 'components/Header/Header.css'


class Header extends Component{
    render() {
        return (
        <div className="top_header">
            <div className="Header_Logo">
                <img src={fish} alt="centras_fish_pic"/>
                <p>CENTRAS</p>
            </div>
            <div className="header_list">
                <div className="project_intro">프로젝트 소개</div>
                <div className="add_nursery">양식장 등록 및 조회</div>
                <div className="my_nursery">내 양식장</div>
                <div className="login">로그인</div>
            </div>
        </div>)
      }
}

export default Header