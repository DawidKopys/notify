import React, { Component, createRef } from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NoteDetails from 'Components/NoteDetails/NoteDetails';
import NotePreviewList from 'Components/NotePreviewList/NotePreviewList';
import NoteSearch from 'Components/NoteSearch/NoteSearch';
import HorizontalSplit from 'Components/HorizontalSplit/HorizontalSplit';

import getCurrentDate from 'Src/utilities';

class App extends Component {
  state = {
    notes: [
      {
        id: uuidv4(),
        timestamp: getCurrentDate(),
        text: 'Lorem ipsum\ndolor sit.',
        title: '',
      },
      {
        id: uuidv4(),
        timestamp: getCurrentDate(),
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        title: 'Some title',
      },
      {
        id: uuidv4(),
        timestamp: getCurrentDate(),
        text:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore ducimus dolores assumenda! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore ducimus dolores assumenda!',
        title: 'Another title',
      },
      {
        id: uuidv4(),
        timestamp: getCurrentDate(),
        text:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore ducimus dolores assumenda!',
        title: '',
      },
    ],
    currentNoteId: '',
    searchPhrase: '',
  };

  noteTextRef = createRef();

  componentDidUpdate(prevProps, prevState) {
    const { currentNoteId } = this.state;

    if (prevState.currentNoteId !== currentNoteId) {
      this.focusCurrentNote();
    }
  }

  addNote = () => {
    this.setState((prevState) => {
      const newNotes = prevState.notes;
      const newNoteId = uuidv4();
      const newNoteTimestamp = getCurrentDate();

      newNotes.unshift({
        id: newNoteId,
        timestamp: newNoteTimestamp,
        text: '',
        title: '',
      });
      return { notes: newNotes, currentNoteId: newNoteId };
    });
  };

  editCurentNoteText = (newText) => {
    this.editCurrentNoteProperty('text', newText);
  };

  editCurentNoteTitle = (newTitle) => {
    this.editCurrentNoteProperty('title', newTitle);
  };

  editCurrentNoteTimestamp = (newTimestamp) => {
    this.editCurrentNoteProperty('timestamp', newTimestamp);
  };

  editCurrentNoteProperty = (propertyName, newValue) => {
    const { currentNoteId } = this.state;

    this.setState((prevState) => {
      const prevNotes = prevState.notes;
      const newNotes = prevNotes.map((note) =>
        note.id === currentNoteId ? { ...note, [propertyName]: newValue } : note
      );
      return { notes: newNotes };
    });
  };

  changeCurrentNote = (id) => {
    const { currentNoteId } = this.state;
    if (currentNoteId !== id) {
      this.deleteCurrentNoteIfEmpty();
      this.changeCurrentNoteId(id);
    } else {
      this.focusCurrentNote();
    }
  };

  focusCurrentNote = () => {
    this.noteTextRef.current.focus();
  };

  deleteCurrentNoteIfEmpty = () => {
    const { notes, currentNoteId } = this.state;
    const currentNote = notes.find((note) => note.id === currentNoteId);
    if (currentNote && currentNote.text === '' && currentNote.title === '') {
      this.deleteCurrentNote();
    }
  };

  deleteCurrentNote = () => {
    const { currentNoteId } = this.state;
    this.deleteNote(currentNoteId);
  };

  deleteNote = (id) =>
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
    }));

  changeCurrentNoteId = (id) => this.setState({ currentNoteId: id });

  editSearchPhrase = (phrase) => this.setState({ searchPhrase: phrase });

  render() {
    const { theme } = this.props;
    const { notes, currentNoteId, searchPhrase } = this.state;
    const currentNote = notes.find((note) => note.id === currentNoteId);
    const themeClass = theme === 'LIGHT' ? 'light-theme' : 'dark-theme';

    return (
      <div className={`root-container ${themeClass}`}>
        <HorizontalSplit>
          <aside className='pl-3 d-flex my-4 flex-column'>
            <button
              type='button'
              className='btn btn-primary note-add-btn'
              onClick={this.addNote}
            >
              Add note
            </button>
            <NoteSearch editSearchPhrase={this.editSearchPhrase} />
            <NotePreviewList
              notes={notes}
              searchPhrase={searchPhrase}
              currentNoteId={currentNoteId}
              changeCurrentNote={this.changeCurrentNote}
              deleteNote={this.deleteNote}
            />
          </aside>
          <NoteDetails
            note={currentNote}
            noteTextRef={this.noteTextRef}
            editNoteText={this.editCurentNoteText}
            editNoteTitle={this.editCurentNoteTitle}
            editNoteTimestamp={this.editCurrentNoteTimestamp}
            noteEditDisabled={!currentNote}
          />
        </HorizontalSplit>
      </div>
    );
  }
}

App.defaultProps = {
  theme: 'LIGHT',
};

App.propTypes = {
  theme: PropTypes.oneOf(['LIGHT', 'DARK']),
};

const mapStateToProps = (store) => ({ theme: store.theme });

export default connect(mapStateToProps)(App);
