import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NoteSearch.scss';

export default class NoteSearch extends Component {
  state = {
    inputText: '',
  };

  handleInputChange = (e) =>
    this.setState({
      inputText: e.target.value.toLowerCase(),
    });

  clearSearchPhrase = () => {
    const { editSearchPhrase } = this.props;

    this.setState({
      inputText: '',
    });
    editSearchPhrase('');
  };

  handleSearchCommit = () => {
    const { editSearchPhrase } = this.props;
    const { inputText } = this.state;

    editSearchPhrase(inputText);
  };

  render() {
    const { inputText } = this.state;
    const clearBtnVisibilityClass = inputText ? 'visible' : 'invisible';

    return (
      <div className='note-search-container d-flex justify-content-between my-4'>
        <div className='position-relative'>
          <input
            type='text'
            className='form-control note-search-input'
            value={inputText}
            onChange={this.handleInputChange}
          />
          <button
            type='button'
            className={`close float-none position-absolute note-search-clear-btn ${clearBtnVisibilityClass}`}
            aria-label='Close'
            onClick={this.clearSearchPhrase}
          >
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
        <button
          type='button'
          className='btn btn-outline-primary note-search-btn '
          // todo: reafactor below code into method
          onClick={this.handleSearchCommit}
        >
          Search
        </button>
      </div>
    );
  }
}

NoteSearch.propTypes = {
  editSearchPhrase: PropTypes.func.isRequired,
};
