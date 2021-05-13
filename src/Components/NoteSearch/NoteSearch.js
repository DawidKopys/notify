import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './NoteSearch.scss';

class NoteSearch extends Component {
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

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      this.handleSearchCommit();
    }
  };

  render() {
    const { theme } = this.props;
    const { inputText } = this.state;
    const clearBtnVisibilityClass = inputText ? 'visible' : 'invisible';

    return (
      <div
        className={`note-search-container d-flex justify-content-between my-4 ${theme}`}
      >
        <div className='position-relative'>
          <input
            type='text'
            className='form-control note-search-input'
            value={inputText}
            onChange={this.handleInputChange}
            onKeyPress={this.handleEnter}
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
          className='btn note-search-btn'
          onClick={this.handleSearchCommit}
        >
          Search
        </button>
      </div>
    );
  }
}

NoteSearch.defaultProps = {
  theme: 'light-theme',
};

NoteSearch.propTypes = {
  editSearchPhrase: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['light-theme', 'dark-theme']),
};

const mapStateToProps = (store) => ({ theme: store.theme });
export default connect(mapStateToProps)(NoteSearch);
