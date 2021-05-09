import React, { Component } from 'react';
import './NoteTitle.scss';
import PropTypes from 'prop-types';

export default class NoteTitle extends Component {
  render() {
    const { noteTitle, editNoteTitle, noteEditDisabled } = this.props;
    const bgColorClass = noteEditDisabled ? 'bg-light' : '';

    return (
      <input
        type='text'
        className={`form-control note-title text-body ${bgColorClass}`}
        placeholder='Title'
        value={noteTitle}
        onChange={editNoteTitle}
        disabled={noteEditDisabled}
      />
    );
  }
}

NoteTitle.propTypes = {
  noteTitle: PropTypes.string.isRequired,
  editNoteTitle: PropTypes.func.isRequired,
  noteEditDisabled: PropTypes.bool.isRequired,
};
