import React, { Component } from 'react';
import './NotePreview.scss';
import PropTypes from 'prop-types';

export default class NotePreview extends Component {
  render() {
    const { noteText, noteId, changeCurrentNote } = this.props;

    return (
      <button
        type='button'
        onClick={() => changeCurrentNote(noteId)}
        className={`list-group-item note-preview my-3 bg-light border-top border-primary ${
          noteText ? '' : 'text-secondary'
        }`}
      >
        {noteText === '' ? 'Create note...' : noteText}
      </button>
    );
  }
}

NotePreview.propTypes = {
  noteText: PropTypes.string.isRequired,
  noteId: PropTypes.string.isRequired,
  changeCurrentNote: PropTypes.func.isRequired,
};
