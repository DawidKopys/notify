import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NotePreviewList.css';

import NotePreview from 'Components/NotePreview/NotePreview';

export default class NotePreviewList extends Component {
  render() {
    const {
      notes,
      searchPhrase,
      currentNoteId,
      changeCurrentNote,
      deleteNote,
    } = this.props;

    const notesToDisplay = notes.filter(
      (note) =>
        note.text.toLowerCase().includes(searchPhrase) ||
        note.title.toLowerCase().includes(searchPhrase)
    );

    const heading = searchPhrase
      ? `Showing results for: '${searchPhrase}'`
      : 'All notes';

    return (
      <>
        <h5>{heading}</h5>
        <div className='overflow-auto flex-grow-1'>
          {notesToDisplay.map((note) => (
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
      </>
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
  searchPhrase: PropTypes.string.isRequired,
  currentNoteId: PropTypes.string.isRequired,
  changeCurrentNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
