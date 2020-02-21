import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
  render(){
    return (
      <Container>
        <Element>
          <ShortCut>로그인/회원가입</ShortCut>
          <Search><h1>Centras</h1></Search>
        </Element>
      </Container>
    );
  }
}

export default Header;

const Container = styled.div`
  width: 100%;
  border-bottom: 1px;
`
const Element = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 100px;
  display: flex;
  flex-flow: row wrap;
`

const ShortCut = styled.div`
  order:1;
  width: 100%;
  height: 20px;
  text-align: right;
  background-color: #a6eabf;
`

const Search = styled.div`
  order: 3;
  width: 1000px;
  background-color: #fffcde;
  text-allign: center;
`
