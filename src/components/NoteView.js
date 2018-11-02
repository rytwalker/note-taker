import React, { Component } from 'react';
import MainNav from './MainNav';
import NoteForm from './NoteForm';
import styled from 'styled-components';

const StyledNoteView = styled.div`
  flex: 1;
  margin-left: 30%;
`;

class NoteView extends Component {
  state = {};
  render() {
    return (
      <StyledNoteView>
        <MainNav toggleSidebar={this.props.toggleSidebar} />
        <NoteForm handleAddNewNote={this.props.handleAddNewNote} />
      </StyledNoteView>
    );
  }
}

export default NoteView;
