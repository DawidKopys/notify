import React, { Component } from 'react';
import './NoteDetails.scss';
import PropTypes from 'prop-types';

import NoteText from 'Components/NoteText/NoteText';
import NoteTitle from 'Components/NoteTitle/NoteTitle';

export default class NoteDetails extends Component {
  render() {
    const {
      note,
      editNoteText,
      editNoteTitle,
      editNoteTimestamp,
      noteTextRef,
      noteEditDisabled,
    } = this.props;

    return (
      <main className='my-4 mx-3 d-flex flex-column'>
        <NoteTitle
          noteTitle={note.title}
          editContent={editNoteTitle}
          editNoteTimestamp={editNoteTimestamp}
          noteEditDisabled={noteEditDisabled}
        />
        <div className='d-flex note-category-date text-secondary my-2'>
          <p className='m-0'>Category</p>
          <p className='px-2 m-0'>•</p>
          <p
            className='m-0'
            title={note.timestamp ? `Last updated at ${note.timestamp}` : ''}
          >
            {note.timestamp ? note.timestamp : 'Date'}
          </p>
        </div>
        <NoteText
          noteText={note.text}
          noteTextRef={noteTextRef}
          editContent={editNoteText}
          editNoteTimestamp={editNoteTimestamp}
          disabled={noteEditDisabled}
        />
      </main>
    );
  }
}

NoteDetails.defaultProps = {
  note: {
    text: 'Please, either add a new note or choose an existing one to display.',
    title: '',
  },
};

NoteDetails.propTypes = {
  note: PropTypes.exact({
    id: PropTypes.string,
    timestamp: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
  }),
  editNoteText: PropTypes.func.isRequired,
  editNoteTitle: PropTypes.func.isRequired,
  editNoteTimestamp: PropTypes.func.isRequired,
  noteTextRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLTextAreaElement) }),
  ]).isRequired,
  noteEditDisabled: PropTypes.bool.isRequired,
};
