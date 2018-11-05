import React, { Component } from 'react';
import MainNav from './MainNav';
import NoteForm from './NoteForm';
import styled from 'styled-components';

const StyledNoteContainer = styled.div`
  flex: 1;
  margin-left: 30%;
`;

class NoteContainer extends Component {
  state = {};
  render() {
    let note;
    if (this.props.notes) {
      let note = this.props.notes.find(
        note => note.id === this.props.match.params.id
      );
    }
    return (
      <StyledNoteContainer>
        <MainNav toggleSidebar={this.props.toggleSidebar} />
        <NoteForm note={note} handleAddNewNote={this.props.handleAddNewNote} />
      </StyledNoteContainer>
    );
  }
}

export default NoteContainer;
