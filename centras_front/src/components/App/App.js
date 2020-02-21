
import React, { Component } from 'react'
import Header from 'components/Header/Header.js'
import main1 from 'components/img/centras_main1.JPG'

class App extends Component {
  render() {
    return (
      <Header> 

      </Header>
    )
  }
}
document.body.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${main1})`


export default App