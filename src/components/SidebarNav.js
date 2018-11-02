import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSidebarNav = styled.nav`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  transition: opacity 200ms;

  input {
    width: 75%;
    padding: 1rem;
    border: 1px solid #dcdde1;
    border-radius: 5px;
    font-size: inherit;
  }

  i {
    font-size: 3rem;
  }
`;

class SidebarNav extends Component {
  render() {
    return (
      <StyledSidebarNav>
        <input type="text" placeholder="Search notes" />
        <i className="far fa-edit" />
      </StyledSidebarNav>
    );
  }
}

export default SidebarNav;
