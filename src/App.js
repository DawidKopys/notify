import React, { Component } from 'react';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className='container mt-5'>
        {/* todo: remiove bg-white */}
        <aside className='sidebar float-left pl-3 bg-white'>
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
          <ul className='list-unstyled notes-list overflow-auto'>
            <li className='note-preview p-2 my-3 bg-light border-top border-primary'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              inventore ducimus dolores assumenda!
            </li>
            <li className='note-preview p-2 my-3 bg-light border-top border-primary'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              inventore ducimus dolores assumenda!
            </li>
          </ul>
        </aside>
        {/* todo: remiove bg-light */}
        <div className='content'>
          <main className='note pt-4 mx-3 d-flex flex-column h-100'>
            <h3>My Note</h3>
            <div className='d-flex note-category-date text-secondary'>
              <h6>Category</h6>
              <h6 className='px-2'>•</h6>
              <h6>Date</h6>
            </div>
            <textarea
              className='note-text w-100 flex-grow-1'
              name=''
              id=''
            ></textarea>
          </main>
        </div>
      </div>
    );
  }
}
