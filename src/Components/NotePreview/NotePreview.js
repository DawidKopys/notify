import React, { Component } from 'react';
import './NotePreview.scss';
import PropTypes from 'prop-types';

export default class NotePreview extends Component {
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
      <button
        type='button'
        onClick={() => changeCurrentNote(noteId)}
        className={`note-preview mb-3 border-primary ${borderClass} ${textColorClass}`}
      >
        {noteTitle && <h6 className='mb-0'>{noteTitle}</h6>}
        <p className='mb-0'>{noteText === '' ? 'Create note...' : noteText}</p>
      </button>
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
  active: PropTypes.bool,
};
