import React, { Component, createRef } from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';

import NotePreview from 'Components/NotePreview/NotePreview';
import NoteDetails from 'Components/NoteDetails/NoteDetails';
import HorizontalSplit from 'Components/HorizontalSplit/HorizontalSplit';

export default class App extends Component {
  state = {
    notes: [
      { text: 'Lorem ipsum\ndolor sit.', id: uuidv4() },
      {
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        id: uuidv4(),
      },
      {
        text:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore ducimus dolores assumenda! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore ducimus dolores assumenda!',
        id: uuidv4(),
      },
      {
        text:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore ducimus dolores assumenda!',
        id: uuidv4(),
      },
    ],
    currentNoteId: 0,
    noteTextRef: createRef(),
  };

  addNote = () => {
    this.setState((prevState) => {
      const newNotes = prevState.notes;
      const newNoteId = uuidv4();

      newNotes.unshift({ text: '', id: newNoteId });
      return { notes: newNotes, currentNoteId: newNoteId };
    });
  };

  editNote = (e) => {
    this.setState((prevState) => {
      const prevNotes = prevState.notes;
      const newNotes = prevNotes.map((note) =>
        note.id === this.state.currentNoteId
          ? { ...note, text: e.target.value }
          : note
      );
      return { notes: newNotes };
    });
  };

  changeCurrentNote = (id) => this.setState({ currentNoteId: id });

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentNoteId !== this.state.currentNoteId) {
      this.state.noteTextRef.current.focus();
    }
  }

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
          <ul className='list-unstyled overflow-auto flex-grow-1'>
            {notes.map((note) => (
              <NotePreview
                text={note.text}
                key={note.id}
                noteId={note.id}
                changeCurrentNote={this.changeCurrentNote}
              />
            ))}
          </ul>
        </aside>
        <NoteDetails
          note={currentNote}
          noteTextRef={noteTextRef}
          editNote={this.editNote}
          noteTextDisabled={currentNoteId === 0 ? true : false}
        />
      </HorizontalSplit>
    );
  }
}
