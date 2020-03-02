
import React, { Component } from 'react'
import Header from 'components/Header/Header.js'
import main1 from 'components/img/centras_main1.JPG'
// import main2 from 'components/img/centras_main2.jpg'
// import main3 from 'components/img/centras_main3.jpg'
import './Project.css'

const style_bg={
  'background':'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
}

class Project extends Component {
  render() {
    return (
    <div className = "project">
        <div className="project_header">
        <img alt="sub_bg" style={style_bg} src={main1} className="sub_bg"></img>
        <Header> 
        </Header>
        </div>
      <div className="project_content">
        <div className="project_title">CENTRAS</div>
        <div className="project_introduce">
            <div>프로젝트 소개</div>
            <p></p>
        </div>
        <div className="project_introduce_team">
            <div>팀 소개</div>
            <p></p>
        </div>
      </div>
    </div>

    )
  }
}

export default Project