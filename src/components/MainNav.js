import React, { Component } from 'react';
import styled from 'styled-components';

const StyledMainNav = styled.nav`
  padding: 2rem;
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;

  i {
    font-size: 3rem;
    margin: 0 1rem;
    cursor: pointer;

    &:first-child {
      margin-right: auto;
    }
  }
`;

class MainNav extends Component {
  state = {};
  render() {
    return (
      <StyledMainNav>
        <i onClick={this.props.toggleSidebar} className="fas fa-caret-left" />
        <i className="fas fa-file-upload" />
        <i className="fas fa-trash" />
        <i className="fas fa-info-circle" />
      </StyledMainNav>
    );
  }
}

export default MainNav;
