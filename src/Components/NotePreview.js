import React, { Component } from 'react';
import './NotePreview.scss';

export default class NotePreview extends Component {
  render() {
    return (
      <li className='note-preview p-2 my-3 bg-light border-top border-primary'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore
        ducimus dolores assumenda!
      </li>
    );
  }
}
