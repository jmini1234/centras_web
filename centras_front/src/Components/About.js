import React, { Component } from 'react'
import main1 from '../img/centras_main1.JPG'
import './About.css'
import jm from '../img/jm.jpg'

const style_bg={
  'background':'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
}

class About extends Component {
  state = {users:[]}
  componentDidMount(){
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({users}));

  }
  render() {
    return (
    <div className = "project">
      {this.state.users.map(user=>
        <li key={user.id}> {user.username} </li>
      )}
        <div className="project_header">
        <img alt="sub_bg" style={style_bg} src={main1} className="sub_bg"></img>
        </div>
      <div className="project_content">
        <div className="project_title">CENTRAS</div>
        <div className="project_introduce">
            <div>프로젝트 소개</div>
            <p>Github : https://github.com/jmini1234/centras_web</p>
            <p style={{'margin-left': '63px'}}>https://github.com/jmini1234/centras</p>
        </div>
        <div className="project_introduce_team">
            <div className="project_introduce_title">팀 소개
              <div>1615018 박소연 </div>
              <div>1771023 박지연 </div>
              <div>
                <img src={jm} width="250px" height="250px"></img>
                <p>1771033 심정민</p> 
                <p style={{'width':'250px','font-size':'14px'}}>역할: 웹페이지 서버 구축,  DB 설계, HTML 및 CSS 디자인</p>
                <p style={{'width':'250px','font-size':'14px'}}>Github: https://github.com/jmini1234 </p>
              </div>
              <div>
                <p>1615065 정연우</p>
                <p style={{'width':'250px','font-size':'14px'}}>역할: Front-End와 API 연동</p>
              </div>
            </div>
        </div>
      </div>
    </div>

    )
  }
}

export default About