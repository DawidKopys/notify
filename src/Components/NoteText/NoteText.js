import React, { Component } from 'react';
import './NoteText.scss';

export default class NoteText extends Component {
  render() {
    return (
      <textarea
        className='note-text w-100 flex-grow-1 border-0'
        name=''
        id=''
        value='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et inventore ducimus dolores assumenda!'
      />
    );
  }
}
