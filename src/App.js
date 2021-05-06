import React, { Component } from 'react';
import './App.scss';

import NotePreview from 'Components/NotePreview/NotePreview';
import NoteDetails from 'Components/NoteDetails/NoteDetails';
import HorizontalSplit from 'Components/HorizontalSplit/HorizontalSplit';

export default class App extends Component {
  state = {
    notes: [
      'Lorem ipsum dolor sit.',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore ducimus dolores assumenda! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore ducimus dolores assumenda!',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore ducimus dolores assumenda!',
    ],
  };

  addNote = () => {
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState.notes.unshift('');
      return newState;
    });
  };

  render() {
    const { notes } = this.state;

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
        <NoteDetails note={notes[0]} />
      </HorizontalSplit>
    );
  }
}
