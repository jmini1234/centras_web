
import React, { Component } from 'react'
import Header from 'components/Header/Header.js'
import main1 from 'components/img/centras_main1.JPG'
// import main2 from 'components/img/centras_main2.jpg'
// import main3 from 'components/img/centras_main3.jpg'
import 'components/App/App.css'

const style_bg={
  'background':'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
}

class App extends Component {
  render() {
    return (
      <div>
        <img alt="main_bg" style={style_bg} src={main1} className="main_bg"></img>
        <Header> 
        </Header>
        <Content/>
      </div>
    )
  }
}
// document.body.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${main1})`

class Content extends React.Component{
  render(){
    return(
      <div className="main-content"> 
        <div className="main-content-title">
          Artificial Intelligence
        </div>
        <div className="main-content-content">
          할지라도 창공에 반짝이는 뭇 별과 같이 산야에 피어나는 군영과 같이 이상은 실로 인간의 부패를 방지하는 소금이라 할지니 인생에 가치를 주는 원질이 되는 것이다 그들은 앞이 긴지라 착목한는 곳이 원대하고 그들은 피가 더운지라
        </div>
      </div>
    )
  }
}
export default App