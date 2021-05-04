import React, { Component } from 'react';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className='container mt-5'>
        <aside className='sidebar float-left pl-3'>
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
        <main className='content'></main>
      </div>
    );
  }
}
