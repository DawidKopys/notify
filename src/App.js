import React, { Component } from 'react';
import './App.scss';

import NotePreview from 'Components/NotePreview';

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
          <main className='note pt-4 mx-3 d-flex flex-column h-100'>
            <h3>My Note</h3>
            <div className='d-flex note-category-date text-secondary'>
              <h6>Category</h6>
              <h6 className='px-2'>•</h6>
              <h6>Date</h6>
            </div>
            <textarea
              className='note-text w-100 flex-grow-1 border-0'
              name=''
              id=''
              value='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore ducimus dolores assumenda!'
            />
          </main>
        </div>
      </div>
    );
  }
}
