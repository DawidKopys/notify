import React, { Component } from 'react';
import './NoteDetails.scss';
import PropTypes from 'prop-types';

import NoteText from 'Components/NoteText/NoteText';

export default class NoteDetails extends Component {
  render() {
    const {
      note,
      editNoteText,
      editNoteTitle,
      noteTextRef,
      noteEditDisabled,
    } = this.props;

    const bgColorClass = noteEditDisabled ? 'bg-light' : '';

    return (
      <main className='note my-4 mx-3 d-flex flex-column'>
        <input
          type='text'
          className={`form-control note-title ${bgColorClass}`}
          placeholder='Title'
          value={note.title}
          onChange={editNoteTitle}
          disabled={noteEditDisabled}
        />
        <div className='d-flex note-category-date text-secondary mt-2'>
          <h6>Category</h6>
          <h6 className='px-2'>•</h6>
          <h6>Date</h6>
        </div>
        <NoteText
          noteText={note.text}
          noteTextRef={noteTextRef}
          editNoteText={editNoteText}
          disabled={noteEditDisabled}
        />
      </main>
    );
  }
}

NoteDetails.defaultProps = {
  note: {
    title: '',
    text: 'Please, either add a new note or choose an existing one to display.',
  },
};

NoteDetails.propTypes = {
  note: PropTypes.exact({
    id: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
  }),
  editNoteText: PropTypes.func.isRequired,
  editNoteTitle: PropTypes.func.isRequired,
  noteTextRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLTextAreaElement) }),
  ]).isRequired,
  noteEditDisabled: PropTypes.bool.isRequired,
};
