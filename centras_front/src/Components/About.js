import React, { Component } from 'react'
import main1 from '../img/centras_main1.JPG'
import './About.css'
import jm from '../img/jm.jpg'
import sy from '../img/sy.jpg'
import jy from '../img/jy.jpg'
import yw from '../img/yw.jpg'

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
            <div># 프로젝트 소개</div>
            <p>지난 40년간 양식업은 전 세계적으로 크게 성장하여 인류가 소비하는 수산물의 상당부분을 
            차지하고 있습니다.</p> 
            <p>
            양식업은 현재 전체 수산물 소비의 약 50%를 차지하고 있으며 점점 더 늘어날 것으로 예상됩니다. 유엔 식량농업기구(FAO)에 따르면 2030년이면 식용수산물의 62%가 양식 수산물로 대체될 것으로 전망하고 있습니다. 
            </p>
            이제 스마트 양식장에 대한 관심은 선택이 아닌 필수입니다.
            <p>
            이에 본 프로젝트에서는 시스템 자동화가 가장 필요한 다음 두 가지 서비스에 초점을 맞추어 프로젝트를 제안합니다.
            </p>
            <p style={{"font-weight": "bold"}}>
            1. 양식장 실시간 스트리밍 서비스
            </p>
            <p style={{"font-weight" : "bold"}}>
            2. 물고기 크기 측정 서비스
            </p>
            <p>
            본 팀에서 제안하는 이 기능들이 대한민국 양식업 발전에 도움을 줄 수 있길 간절하게 소망합니다.
            </p>
            <p>
            지도교수 : 조동섭
            </p>
            <p>Github : https://github.com/jmini1234/centras_web</p>
            <p style={{'margin-left': '63px'}}>https://github.com/jmini1234/centras</p>
        </div>
        <div className="project_introduce_team">
            <div className="project_introduce_title">
              <p style={{"font-weight" : "bold"}}>＃ 팀 소개</p>
              <div>
              <img src={sy} width="200px" height="250px"></img>
                <p>1615018 박소연</p>
                <p style={{'width':'200px','font-size':'14px'}}>역할: 웹페이지 서버 구축,  DB 설계, HTML 및 CSS 디자인</p>
                <p style={{'width':'200px','font-size':'14px'}}>Email: sypark9646@gmail.com </p>
                <p style={{'width':'200px','font-size':'14px'}}>Github: https://github.com/sypark9646 </p>
              </div>
              <div>
                <img src={jy} width="200px" height="250px"></img>
                <p>1771023 박지연</p>
                <p style={{'width':'200px','font-size':'14px'}}>역할: </p>
                <p style={{'width':'200px','font-size':'14px'}}>Email: bgy1060@naver.com </p>
                <p style={{'width':'200px','font-size':'14px'}}>Github: https://github.com/bgy1060 </p> 
              </div>
              <div>
                <img src={jm} width="200px" height="250px"></img>
                <p>1771033 심정민</p> 
                <p style={{'width':'200px','font-size':'14px'}}>역할: 웹페이지 서버 구축,  DB 설계, HTML 및 CSS 디자인</p>
                <p style={{'width':'200px','font-size':'14px'}}>Email: shjj09@naver.com </p>
                <p style={{'width':'200px','font-size':'14px'}}>Github: https://github.com/jmini1234 </p>
              </div>
              <div>
              <img src={yw} width="200px" height="250px"></img>
                <p>1615065 정연우</p>
                <p style={{'width':'200px','font-size':'14px'}}>역할: Front-End와 API 연동</p>
                <p style={{'width':'200px','font-size':'14px'}}>Email: lucia526@naver.com </p>
                <p style={{'width':'200px','font-size':'14px'}}>Github: https://github.com/Jyw526 </p>
              </div>
            </div>
        </div>
      </div>
    </div>

    )
  }
}

export default About