import React, { Component } from 'react';
import './NoteDetails.scss';

import NoteText from 'Components/NoteText/NoteText';

export default class NoteDetails extends Component {
  render() {
    const { note } = this.props;

    return (
      <main className='note pt-4 mx-3 d-flex flex-column h-100'>
        <h3>My Note</h3>
        <div className='d-flex note-category-date text-secondary'>
          <h6>Category</h6>
          <h6 className='px-2'>•</h6>
          <h6>Date</h6>
        </div>
        <NoteText noteText={note} />
      </main>
    );
  }
}
