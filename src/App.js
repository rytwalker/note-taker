import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import NoteView from './components/NoteView';
import Sidebar from './components/Sidebar';
import noteData from './noteData';
import './styles/App.css';

class App extends Component {
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
      <div className="App">
        <Sidebar
          notes={notes}
          showSidebar={showSidebar}
          handleDragAndDrop={this.handleDragAndDrop}
        />
        <Route
          exact
          path="/"
          render={routerProps => (
            <NoteView
              toggleSidebar={this.toggleSidebar}
              handleAddNewNote={this.handleAddNewNote}
              {...routerProps}
            />
          )}
        />
        <Route
          path="/:id"
          render={routerProps => (
            <NoteView toggleSidebar={this.toggleSidebar} {...routerProps} />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
