
import React, { Component } from 'react'
import Header from 'components/Header/Header.js'
import main1 from 'components/img/centras_main1.JPG'
// import main2 from 'components/img/centras_main2.jpg'
// import main3 from 'components/img/centras_main3.jpg'
import './Register.css'

const style_bg={
  'background':'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
}

class Nursery extends Component {
  render() {
    return (
    <div className = "project">
        <div className="project_header">
        <img alt="sub_bg" style={style_bg} src={main1} className="sub_bg"></img>
        <Header> 
        </Header>
        </div>
      <div className="register-main">
        <div className="nursery-register">
            <div className="register_title">양식장 등록</div>
            <p className="register-sub-title">관리할 양식장을 추가하고 싶으시면 새로운 양식장 등록을 해주세요!</p>
            <div class="inputForm" id="inputNursery" class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="양식장 이름"/>
            </div>
            <button style={{
                width :'180px',
                height: '60px',
                position: 'absolute',
                bottom: '280px',
                left: '750px',
                'border-radius': '5%',
                margin: '0'
            }}type="button" type="submit" class="btn btn-primary">등록하기</button>
        </div>
        <div className="my_nursery_list">
            <div>내 양식장</div>
        </div>
      </div>
    </div>

    )
  }
}

export default Nursery