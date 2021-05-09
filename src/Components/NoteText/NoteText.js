import React, { Component } from 'react';
import './NoteText.scss';
import PropTypes from 'prop-types';

export default class NoteText extends Component {
  render() {
    const { noteText, editNoteText, noteTextRef, disabled } = this.props;
    const colorClass = disabled ? 'text-secondary bg-light' : 'text-body';

    return (
      <textarea
        className={`form-control note-text w-100 flex-grow-1  ${colorClass}`}
        placeholder='Create note...'
        value={noteText}
        onChange={editNoteText}
        ref={noteTextRef}
        wrap='hard'
        disabled={disabled}
      />
    );
  }
}

NoteText.propTypes = {
  noteText: PropTypes.string.isRequired,
  editNoteText: PropTypes.func.isRequired,
  noteTextRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLTextAreaElement) }),
  ]).isRequired,
  disabled: PropTypes.bool.isRequired,
};
