import React, { Component } from 'react';
import './NoteText.scss';

export default class NoteText extends Component {
  render() {
    const { noteText, editNote, noteTextRef } = this.props;

    return (
      <textarea
        className='form-control note-text w-100 flex-grow-1 text-body mb-4'
        placeholder='Create note...'
        name=''
        id=''
        value={noteText}
        onChange={editNote}
        ref={noteTextRef}
        wrap='hard'
      />
    );
  }
}
