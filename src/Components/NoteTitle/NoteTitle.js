import React, { Component } from 'react';
import './NoteTitle.scss';
import PropTypes from 'prop-types';

import getCurrentDate from 'Src/utilities';

export default class NoteTitle extends Component {
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
    const { editNoteTitle } = this.props;

    editNoteTitle(e.target.value);
    this.setState({ wasEdited: true });
  };

  render() {
    const { noteTitle, noteEditDisabled } = this.props;
    const bgColorClass = noteEditDisabled ? 'bg-light' : '';

    return (
      <input
        type='text'
        className={`form-control note-title text-body ${bgColorClass}`}
        placeholder='Title'
        value={noteTitle}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        disabled={noteEditDisabled}
      />
    );
  }
}

NoteTitle.propTypes = {
  noteTitle: PropTypes.string.isRequired,
  editNoteTitle: PropTypes.func.isRequired,
  editNoteTimestamp: PropTypes.func.isRequired,
  noteEditDisabled: PropTypes.bool.isRequired,
};
