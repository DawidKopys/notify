import React, { Component } from 'react';
import './NoteText.scss';

export default class NoteText extends Component {
  state = {
    noteText: this.props.noteText,
  };

  handleChange = (e) => {
    this.setState({ noteText: e.target.value });
  };

  render() {
    const { noteTextRef } = this.props;

    return (
      <textarea
        className='form-control note-text w-100 flex-grow-1 text-body mb-4'
        placeholder='Create note...'
        name=''
        id=''
        value={this.state.noteText}
        onChange={this.handleChange}
        ref={noteTextRef}
      />
    );
  }
}
