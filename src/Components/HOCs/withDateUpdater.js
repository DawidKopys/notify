import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getCurrentDate from 'Src/utilities';

function withDateUpdater(WrappedComponent) {
  class DateUpdater extends Component {
    state = {
      wasEdited: false,
    };

    handleBlur = () => {
      const { wasEdited } = this.state;
      const { editNoteTimestamp } = this.props;

      if (wasEdited) {
        editNoteTimestamp(getCurrentDate());
        this.setState({ wasEdited: false });
      }
    };

    handleChange = (e) => {
      const { editContent } = this.props;

      editContent(e.target.value);
      this.setState({ wasEdited: true });
    };

    render() {
      const { editContent, editNoteTimestamp, ...props } = this.props;
      return (
        <WrappedComponent
          handleBlur={this.handleBlur}
          handleChange={this.handleChange}
          {...props}
        />
      );
    }
  }

  DateUpdater.propTypes = {
    editContent: PropTypes.func.isRequired,
    editNoteTimestamp: PropTypes.func.isRequired,
  };

  return DateUpdater;
}

export default withDateUpdater;
