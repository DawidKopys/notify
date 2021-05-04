import React, { Component } from 'react';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className='container mt-5'>
        {/* todo: remove border-right */}
        <aside className='sidebar float-left border-right px-3'>
          <div className='note-search-container d-flex justify-content-between my-4'>
            <input type='text' className='form-control note-search-input' />
            <button
              type='button'
              className='btn btn-outline-primary note-search-btn'
            >
              Search
            </button>
          </div>
          <h5 className>All Notfdes</h5>
          <ul className='list-unstyled notes-list'>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              inventore ducimus dolores assumenda!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              inventore ducimus dolores assumenda!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              inventore ducimus dolores assumenda!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              inventore ducimus dolores assumenda!
            </li>
          </ul>
        </aside>
        <main className='content bg-light'></main>
      </div>
    );
  }
}
