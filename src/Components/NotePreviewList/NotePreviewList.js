import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NotePreviewList.css';

import NotePreview from 'Components/NotePreview/NotePreview';

export default class NotePreviewList extends Component {
  render() {
    const { notes, currentNoteId, changeCurrentNote, deleteNote } = this.props;

    return (
      <div className='overflow-auto flex-grow-1'>
        {notes.map((note) => (
          <NotePreview
            noteTitle={note.title}
            noteText={note.text}
            key={note.id}
            noteId={note.id}
            changeCurrentNote={changeCurrentNote}
            deleteNote={deleteNote}
            active={currentNoteId === note.id}
          />
        ))}
      </div>
    );
  }
}

NotePreviewList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      timestamp: PropTypes.string,
      text: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  currentNoteId: PropTypes.string.isRequired,
  changeCurrentNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
