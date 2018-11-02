import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNoteForm = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 6rem;
  input,
  textarea {
    width: 100%;
    margin-bottom: 3rem;
    padding: 1rem;
    font-size: inherit;
    font-family: inherit;
    border: none;
    outline: none;
    caret-color: #487eb0;
  }

  input {
    font-size: 3rem;
  }

  textarea {
    height: 60vh;
    resize: none;
  }

  button {
    padding: 1rem;
    background: #487EB0
    color: #fff;
    font-size: inherit;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }
`;

class NoteForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    };
  }

  componentDidMount() {
    if (this.props.note) {
      const { title, textBody, tags } = this.props.note;
      this.setState({ title, textBody, tags });
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;
    this.props.handleAddNewNote(title, body);
  };

  render() {
    const { title, body } = this.state;
    return (
      <StyledNoteForm onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Note title"
          name="title"
          onChange={this.handleInputChange}
          value={title}
        />
        <textarea
          placeholder="What do you have to say?"
          value={body}
          onChange={this.handleInputChange}
          name="body"
        />
        <button>Save</button>
      </StyledNoteForm>
    );
  }
}

export default NoteForm;
