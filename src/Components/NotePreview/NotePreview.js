import React, { Component } from 'react';
import './NotePreview.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class NotePreview extends Component {
  handleDeleteNote = (e) => {
    const { noteId, deleteNote } = this.props;
    deleteNote(noteId);
    e.stopPropagation();
  };

  handleKeyPress = (e) => {
    const { noteId, changeCurrentNote } = this.props;
    if (e.key === 'Enter') {
      changeCurrentNote(noteId);
    }
  };

  render() {
    const {
      noteTitle,
      noteText,
      noteId,
      changeCurrentNote,
      active,
      theme,
    } = this.props;
    const themeClass = theme === 'LIGHT' ? 'light-theme' : 'dark-theme';
    const noteTextEmptyClass = noteText ? '' : 'note-preview__note-text--empty';
    const text = noteText === '' ? 'Create note...' : noteText;
    const activeClass = active ? 'note-preview--active' : '';

    return (
      <div
        role='button'
        onClick={() => changeCurrentNote(noteId)}
        onKeyPress={this.handleKeyPress}
        className={`note-preview mb-3 ${themeClass} ${activeClass}`}
        tabIndex={0}
      >
        <button
          type='button'
          className='close'
          aria-label='Close'
          onClick={this.handleDeleteNote}
          tabIndex={0}
        >
          <span aria-hidden='true'>&times;</span>
        </button>
        {noteTitle && <h6 className='mb-0'>{noteTitle}</h6>}
        <p className={`note-preview__note-text mb-0 ${noteTextEmptyClass}`}>
          {text}
        </p>
      </div>
    );
  }
}

NotePreview.defaultProps = {
  active: false,
  theme: 'LIGHT',
};

NotePreview.propTypes = {
  noteTitle: PropTypes.string.isRequired,
  noteText: PropTypes.string.isRequired,
  noteId: PropTypes.string.isRequired,
  changeCurrentNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  active: PropTypes.bool,
  theme: PropTypes.oneOf(['LIGHT', 'DARK']),
};

const mapStateToProps = (store) => ({ theme: store.theme });

export default connect(mapStateToProps)(NotePreview);
