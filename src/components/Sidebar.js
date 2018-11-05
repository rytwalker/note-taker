import React, { Component } from 'react';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import Notes from './Notes';
import SidebarNav from './SidebarNav';

const StyledSidebar = styled.div`
  width: 30%;
  background: #f5f6fa;
  border-right: 1px solid #dcdde1;
  transition: width 500ms;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  overflow: scroll;
`;

class Sidebar extends Component {
  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    this.props.handleDragAndDrop(source.index, destination.index, draggableId);
  };
  render() {
    const { notes, showSidebar } = this.props;
    return (
      <StyledSidebar style={!showSidebar ? { width: '0' } : null}>
        <SidebarNav showSidebar={showSidebar} />
        {!notes ? (
          <div>Loading...</div>
        ) : (
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Notes notes={notes} showSidebar={showSidebar} />
          </DragDropContext>
        )}
      </StyledSidebar>
    );
  }
}

export default Sidebar;
