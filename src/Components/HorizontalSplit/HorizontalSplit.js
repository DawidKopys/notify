import React, { Children, Component } from 'react';
import './HorizontalSplit.scss';
import PropTypes from 'prop-types';

export default class HorizontalSplit extends Component {
  render() {
    const { children } = this.props;

    if (Children.count(children) !== 2) {
      throw new SyntaxError(
        'HorizontalSplit component must have exactly 2 children elements!'
      );
    }

    return (
      <div className='container pt-5 d-flex horizontal-split-container'>
        {children}
      </div>
    );
  }
}

HorizontalSplit.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
