import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './NotePreviewList.scss';

import NotePreview from 'Components/NotePreview/NotePreview';

class NotePreviewList extends Component {
  render() {
    const {
      notes,
      searchPhrase,
      currentNoteId,
      changeCurrentNote,
      deleteNote,
      theme,
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
        <h5 className={`note-preview-list__heading ${theme}`}>{heading}</h5>
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

NotePreviewList.defaultProps = {
  theme: 'light-theme',
};

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
  theme: PropTypes.oneOf(['light-theme', 'dark-theme']),
};

const mapStateToProps = (store) => ({ theme: store.theme });

export default connect(mapStateToProps)(NotePreviewList);
