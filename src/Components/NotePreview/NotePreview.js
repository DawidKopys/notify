import React, { Component } from 'react';
import './NotePreview.scss';

export default class NotePreview extends Component {
  render() {
    return (
      <li className='note-preview p-2 my-3 bg-light border-top border-primary'>
        {this.props.text}
      </li>
    );
  }
}
