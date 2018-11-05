import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NoteContainer from '../components/NoteContainer';
import Sidebar from '../components/Sidebar';
import noteData from '../noteData';

class NoteView extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      showSidebar: true
    };
  }

  componentDidMount() {
    this.setState({ notes: noteData });
  }

  toggleSidebar = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  };

  handleAddNewNote = (title, body) => {
    const newNote = { title, body, id: Date.now() };
    this.setState({ notes: [newNote, ...this.state.notes] });
    this.props.history.push(`/${newNote.id}`);
  };

  handleDragAndDrop = (sourceIndex, destinationIndex, draggableId) => {
    const { notes } = this.state;
    const newNotes = [...notes];
    const moveNote = newNotes.find(note => note.id === draggableId);
    newNotes.splice(sourceIndex, 1);
    newNotes.splice(destinationIndex, 0, moveNote);
    this.setState({ notes: newNotes });
  };

  render() {
    const { notes, showSidebar } = this.state;
    return (
      <div className="View">
        <Sidebar
          notes={notes}
          showSidebar={showSidebar}
          handleDragAndDrop={this.handleDragAndDrop}
        />

        <NoteContainer
          toggleSidebar={this.toggleSidebar}
          handleAddNewNote={this.handleAddNewNote}
        />

        <Route
          path="/:id"
          render={routerProps => (
            <NoteView
              notes={notes}
              toggleSidebar={this.toggleSidebar}
              handleAddNewNote={this.handleAddNewNote}
              {...routerProps}
            />
          )}
        />
      </div>
    );
  }
}

export default NoteView;
