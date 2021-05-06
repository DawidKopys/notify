import React, { Component } from 'react';
import './NoteDetails.scss';

export default class NoteDetails extends Component {
  render() {
    return (
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
    );
  }
}
