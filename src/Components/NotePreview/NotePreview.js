import React, { Component } from 'react';
import './NotePreview.scss';

export default class NotePreview extends Component {
  render() {
    const isEmpty = !this.props.text;

    return (
      <li
        onClick={() => this.props.changeCurrentNote(this.props.noteId)}
        className={`note-preview my-3 bg-light border-top border-primary ${
          isEmpty ? 'text-secondary' : ''
        }`}
      >
        {isEmpty ? 'Create note...' : this.props.text}
      </li>
    );
  }
}
