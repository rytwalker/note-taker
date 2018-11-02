import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const StyledNote = styled.div`
  padding: 2rem;
  border-bottom: 1px solid #dcdde1;
  transition: opacity 200ms;
  cursor: pointer;
  /* color: ${props => (props.isDragging ? 'white' : '#2f3640')}; */
  background: ${props => (props.isDragging ? '#D2DEEB' : '#f5f6fa')};

  &:hover {
    background: rgba(72, 126, 176, 0.2);
  }

  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 2.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    margin: 0;
    font-size: 1.6rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

class Note extends Component {
  render() {
    const { id, title, body } = this.props.note;
    const { index } = this.props;
    return (
      <Draggable draggableId={id} index={index}>
        {(provided, snapshot) => (
          <StyledNote
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <h2>{title}</h2>
            <p>{body}</p>
          </StyledNote>
        )}
      </Draggable>
    );
  }
}

export default Note;
