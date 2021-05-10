import React, { Component } from 'react';
import './NotePreview.scss';
import PropTypes from 'prop-types';

export default class NotePreview extends Component {
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
    } = this.props;
    const textColorClass = noteText ? '' : 'text-secondary';
    const borderClass = active
      ? 'border-top border-left note-preview--active'
      : 'border-top';

    return (
      <div
        role='button'
        onClick={() => changeCurrentNote(noteId)}
        onKeyPress={this.handleKeyPress}
        className={`note-preview mb-3 border-primary ${borderClass} ${textColorClass}`}
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
        <p className='mb-0'>{noteText === '' ? 'Create note...' : noteText}</p>
      </div>
    );
  }
}

NotePreview.defaultProps = {
  active: false,
};

NotePreview.propTypes = {
  noteTitle: PropTypes.string.isRequired,
  noteText: PropTypes.string.isRequired,
  noteId: PropTypes.string.isRequired,
  changeCurrentNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  active: PropTypes.bool,
};
