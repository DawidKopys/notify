import React, { Component } from 'react';
import './NoteText.scss';

export default class NoteText extends Component {
  render() {
    const { note, editNote, noteTextRef, disabled } = this.props;
    const noteText = disabled
      ? 'Please, either add a new note or choose an existing one to display.'
      : note.text;

    return (
      <textarea
        className={`form-control note-text w-100 flex-grow-1 mb-4 ${
          disabled ? 'text-secondary bg-light' : 'text-body'
        }`}
        placeholder='Create note...'
        value={noteText}
        onChange={editNote}
        ref={noteTextRef}
        wrap='hard'
        disabled={disabled}
      />
    );
  }
}
