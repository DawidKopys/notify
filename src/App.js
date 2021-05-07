import React, { Component, createRef } from 'react';
import './App.scss';

import NotePreview from 'Components/NotePreview/NotePreview';
import NoteDetails from 'Components/NoteDetails/NoteDetails';
import HorizontalSplit from 'Components/HorizontalSplit/HorizontalSplit';

export default class App extends Component {
  state = {
    notes: [
      'Lorem ipsum\ndolor sit.',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore ducimus dolores assumenda! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore ducimus dolores assumenda!',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore ducimus dolores assumenda!',
    ],
    currentNoteId: 0,
    noteTextRef: createRef(),
  };

  addNote = () => {
    this.setState((prevState) => {
      const newNotes = prevState.notes;
      newNotes.unshift('');
      return newNotes;
    });
    this.state.currentNoteId = 0;
    this.state.noteTextRef.current.focus();
  };

  editNote = (e) => {
    this.setState((prevState) => {
      const newNotes = prevState.notes;
      newNotes[this.state.currentNoteId] = e.target.value;
      return { notes: newNotes };
    });
  };

  render() {
    const { notes, noteTextRef, currentNoteId } = this.state;

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
              <NotePreview text={note} />
            ))}
          </ul>
        </aside>
        <NoteDetails
          note={notes[currentNoteId]}
          noteTextRef={noteTextRef}
          editNote={this.editNote}
        />
      </HorizontalSplit>
    );
  }
}
