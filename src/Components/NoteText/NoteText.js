import React, { Component } from 'react';
import './NoteText.scss';
import PropTypes from 'prop-types';

import getCurrentDate from 'Src/utilities';

export default class NoteText extends Component {
  state = {
    wasEdited: false,
  };

  handleBlur = () => {
    const { wasEdited } = this.state;
    const { editNoteTimestamp } = this.props;

    if (wasEdited) {
      editNoteTimestamp(getCurrentDate());
      this.setState({ wasEdited: false });
    }
  };

  handleChange = (e) => {
    const { editNoteText } = this.props;

    editNoteText(e.target.value);
    this.setState({ wasEdited: true });
  };

  render() {
    const { noteText, noteTextRef, disabled } = this.props;
    const colorClass = disabled ? 'text-secondary bg-light' : 'text-body';

    return (
      <textarea
        className={`form-control note-text w-100 flex-grow-1  ${colorClass}`}
        placeholder='Create note...'
        value={noteText}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
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
  editNoteTimestamp: PropTypes.func.isRequired,
  noteTextRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLTextAreaElement) }),
  ]).isRequired,
  disabled: PropTypes.bool.isRequired,
};
