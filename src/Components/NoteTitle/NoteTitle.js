// eslint-disable-next-line max-classes-per-file
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './NoteTitle.scss';
import withDateUpdater from 'Components/HOCs/withDateUpdater';

class NoteTitle extends Component {
  render() {
    const {
      noteTitle,
      noteEditDisabled,
      handleBlur,
      handleChange,
      theme,
    } = this.props;

    return (
      <input
        type='text'
        className={`form-control note-title ${theme}`}
        placeholder='Title'
        value={noteTitle}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={noteEditDisabled}
      />
    );
  }
}

NoteTitle.defaultProps = {
  theme: 'light-theme',
};

NoteTitle.propTypes = {
  noteTitle: PropTypes.string.isRequired,
  noteEditDisabled: PropTypes.bool.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['light-theme', 'dark-theme']),
};

const mapStateToProps = (store) => ({ theme: store.theme });

export default connect(mapStateToProps)(withDateUpdater(NoteTitle));
