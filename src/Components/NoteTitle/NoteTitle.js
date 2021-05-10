// eslint-disable-next-line max-classes-per-file
import React, { Component } from 'react';
import './NoteTitle.scss';
import PropTypes from 'prop-types';
import withDateUpdater from 'Components/HOCs/withDateUpdater';

class NoteTitle extends Component {
  render() {
    const {
      noteTitle,
      noteEditDisabled,
      handleBlur,
      handleChange,
    } = this.props;
    const bgColorClass = noteEditDisabled ? 'bg-light' : '';

    return (
      <input
        type='text'
        className={`form-control note-title text-body ${bgColorClass}`}
        placeholder='Title'
        value={noteTitle}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={noteEditDisabled}
      />
    );
  }
}

NoteTitle.propTypes = {
  noteTitle: PropTypes.string.isRequired,
  noteEditDisabled: PropTypes.bool.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withDateUpdater(NoteTitle);
