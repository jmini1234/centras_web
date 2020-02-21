import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <Nav>
        <NavList>
          <NavItem><Link to='/temp'>온도</Link></NavItem>
          <NavItem><Link to='/size'>어체 크기</Link></NavItem>
        </NavList>
      </Nav>
    );
  }
}

export default Navigation;

const Nav = styled.div`
  width:100%;
  height: 30px;
  border-bottom: 1px;
`

const NavList = styled.ul`
  width: 1080px;
  display: flex;
  margin: 10 auto;
`

const NavItem = styled.li`
  width: 400px;
  margin-left : 250px;
  margin-top: 5px;
  display: flex;
`
