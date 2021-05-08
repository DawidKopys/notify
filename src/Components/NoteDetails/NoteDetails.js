import React, { Component } from 'react';
import './NoteDetails.scss';
import PropTypes from 'prop-types';

import NoteText from 'Components/NoteText/NoteText';

export default class NoteDetails extends Component {
  render() {
    const { note, editNote, noteTextRef, noteTextDisabled } = this.props;

    return (
      <main className='note pt-3 mx-3 d-flex flex-column h-100'>
        <h3
          className={`note-title ${
            note.title ? '' : 'text-secondary font-weight-normal'
          }`}
        >
          {note.title ? note.title : 'Title'}
        </h3>
        <div className='d-flex note-category-date text-secondary'>
          <h6>Category</h6>
          <h6 className='px-2'>•</h6>
          <h6>Date</h6>
        </div>
        <NoteText
          noteText={note.text}
          noteTextRef={noteTextRef}
          editNote={editNote}
          disabled={noteTextDisabled}
        />
      </main>
    );
  }
}

NoteDetails.defaultProps = {
  note: {
    text: 'Please, either add a new note or choose an existing one to display.',
  },
};

NoteDetails.propTypes = {
  note: PropTypes.exact({
    id: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
  }),
  editNote: PropTypes.func.isRequired,
  noteTextRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLTextAreaElement) }),
  ]).isRequired,
  noteTextDisabled: PropTypes.bool.isRequired,
};
