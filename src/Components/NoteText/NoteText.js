import React, { Component } from 'react';
import './NoteText.scss';
import PropTypes from 'prop-types';
import withDateUpdater from 'Components/HOCs/withDateUpdater';

class NoteText extends Component {
  render() {
    const {
      noteText,
      noteTextRef,
      disabled,
      handleBlur,
      handleChange,
    } = this.props;
    const colorClass = disabled ? 'text-secondary bg-light' : 'text-body';

    return (
      <textarea
        className={`form-control note-text w-100 flex-grow-1  ${colorClass}`}
        placeholder='Create note...'
        value={noteText}
        onChange={handleChange}
        onBlur={handleBlur}
        ref={noteTextRef}
        wrap='hard'
        disabled={disabled}
      />
    );
  }
}

NoteText.propTypes = {
  noteText: PropTypes.string.isRequired,
  noteTextRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLTextAreaElement) }),
  ]).isRequired,
  disabled: PropTypes.bool.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withDateUpdater(NoteText);
