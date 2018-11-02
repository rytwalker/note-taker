import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Note from './Note';

const StyledNotes = styled.div``;

class Notes extends Component {
  render() {
    return (
      <Droppable droppableId={'notes'}>
        {provided => (
          <StyledNotes ref={provided.innerRef} {...provided.droppableProps}>
            {this.props.notes.map((note, index) => (
              <Note key={note.id} note={note} index={index} />
            ))}
            {provided.placeholder}
          </StyledNotes>
        )}
      </Droppable>
    );
  }
}

export default Notes;
