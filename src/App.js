import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NoteView from './views/NoteView';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NoteView} />
      </div>
    );
  }
}

export default App;
