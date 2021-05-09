import React, { Component, createRef } from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';

import NotePreview from 'Components/NotePreview/NotePreview';
import NoteDetails from 'Components/NoteDetails/NoteDetails';
import HorizontalSplit from 'Components/HorizontalSplit/HorizontalSplit';

export default class App extends Component {
  state = {
    notes: [
      {
        id: uuidv4(),
        text: 'Lorem ipsum\ndolor sit.',
        title: '',
      },
      {
        id: uuidv4(),
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        title: '',
      },
      {
        id: uuidv4(),
        text:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore ducimus dolores assumenda! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore ducimus dolores assumenda!',
        title: '',
      },
      {
        id: uuidv4(),
        text:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore ducimus dolores assumenda!',
        title: '',
      },
    ],
    currentNoteId: 0,
    noteTextRef: createRef(),
  };

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

      newNotes.unshift({ id: newNoteId, text: '', title: '' });
      return { notes: newNotes, currentNoteId: newNoteId };
    });
  };

  editNote = (e) => {
    const { currentNoteId } = this.state;

    this.setState((prevState) => {
      const prevNotes = prevState.notes;
      const newNotes = prevNotes.map((note) =>
        note.id === currentNoteId ? { ...note, text: e.target.value } : note
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
    const { noteTextRef } = this.state;
    noteTextRef.current.focus();
  };

  deleteCurrentNoteIfEmpty = () => {
    const { notes, currentNoteId } = this.state;
    const currentNote = notes.find((note) => note.id === currentNoteId);
    if (currentNote && currentNote.text === '') {
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

  render() {
    const { notes, noteTextRef, currentNoteId } = this.state;
    const currentNote = notes.find((note) => note.id === currentNoteId);

    return (
      <HorizontalSplit>
        <aside className='pl-3 d-flex flex-column'>
          <button
            type='button'
            className='btn btn-primary note-add-btn mt-4'
            onClick={this.addNote}
          >
            Add note
          </button>
          <div className='note-search-container d-flex justify-content-between my-4'>
            <input type='text' className='form-control note-search-input' />
            <button
              type='button'
              className='btn btn-outline-primary note-search-btn '
            >
              Search
            </button>
          </div>
          <h5>All Notes </h5>
          <div className='overflow-auto flex-grow-1'>
            {notes.map((note) => (
              <NotePreview
                noteText={note.text}
                key={note.id}
                noteId={note.id}
                changeCurrentNote={this.changeCurrentNote}
              />
            ))}
          </div>
        </aside>
        <NoteDetails
          note={currentNote}
          noteTextRef={noteTextRef}
          editNote={this.editNote}
          noteTextDisabled={currentNoteId === 0}
        />
      </HorizontalSplit>
    );
  }
}
