import React, { Component } from 'react';
import './App.scss';

import NotePreview from 'Components/NotePreview/NotePreview';
import NoteDetails from 'Components/NoteDetails/NoteDetails';

export default class App extends Component {
  render() {
    return (
      <div className='container mt-5'>
        <aside className='sidebar float-left pl-3 d-flex flex-column'>
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
          <ul className='list-unstyled notes-list overflow-auto flex-grow-1'>
            <NotePreview />
            <NotePreview />
          </ul>
        </aside>
        <div className='content'>
          <NoteDetails />
        </div>
      </div>
    );
  }
}
