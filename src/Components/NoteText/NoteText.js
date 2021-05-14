import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './NoteText.scss';
import withDateUpdater from 'Components/HOCs/withDateUpdater';

class NoteText extends Component {
  render() {
    const {
      noteText,
      noteTextRef,
      disabled,
      handleBlur,
      handleChange,
      theme,
    } = this.props;

    return (
      <textarea
        className={`form-control note-text w-100 flex-grow-1 ${theme}`}
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

NoteText.defaultProps = {
  theme: 'light-theme',
};

NoteText.propTypes = {
  noteText: PropTypes.string.isRequired,
  noteTextRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLTextAreaElement) }),
  ]).isRequired,
  disabled: PropTypes.bool.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['light-theme', 'dark-theme']),
};

const mapStateToProps = (store) => ({ theme: store.theme });

export default connect(mapStateToProps)(withDateUpdater(NoteText));
