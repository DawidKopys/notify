import React, { Component } from 'react';
import './App.scss';

import NotePreview from 'Components/NotePreview/NotePreview';
import NoteDetails from 'Components/NoteDetails/NoteDetails';
import HorizontalSplit from 'Components/HorizontalSplit/HorizontalSplit';

export default class App extends Component {
  render() {
    return (
      <HorizontalSplit>
        <aside className='pl-3 d-flex flex-column'>
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
            <NotePreview />
            <NotePreview />
            <NotePreview />
          </ul>
        </aside>
        <NoteDetails />
      </HorizontalSplit>
    );
  }
}
