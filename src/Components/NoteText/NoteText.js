import React, { Component } from 'react';
import './NoteText.scss';
import PropTypes from 'prop-types';

export default class NoteText extends Component {
  render() {
    const { noteText, editNote, noteTextRef, disabled } = this.props;

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

NoteText.propTypes = {
  noteText: PropTypes.string.isRequired,
  editNote: PropTypes.func.isRequired,
  noteTextRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLTextAreaElement) }),
  ]).isRequired,
  disabled: PropTypes.bool.isRequired,
};
