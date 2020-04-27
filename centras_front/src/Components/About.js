import React, { Component } from 'react'
import main1 from '../img/centras_main1.JPG'
import './About.css'

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

export default About