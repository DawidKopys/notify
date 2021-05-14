import React, { Component } from 'react';
import './NavBar.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTheme } from 'Src/redux/reducer';

class NavBar extends Component {
  render() {
    const { theme, changeTheme } = this.props;
    const navbarStyle =
      theme === 'light-theme' ? 'navbar-light bg-light' : 'navbar-dark bg-dark';
    const btnText = theme === 'light-theme' ? 'Dark Theme' : 'Light Theme';
    const btnStyle =
      theme === 'light-theme' ? 'btn-outline-dark' : 'btn-outline-light';

    return (
      <nav className={`navbar ${navbarStyle}`}>
        <div className='container'>
          <a className='navbar-brand' href='/'>
            NOTIFY
          </a>
          <form className='form-inline'>
            <button
              className={`btn ${btnStyle}`}
              type='button'
              onClick={() => changeTheme()}
            >
              {btnText}
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

NavBar.defaultProps = {
  theme: 'light-theme',
};

NavBar.propTypes = {
  theme: PropTypes.oneOf(['light-theme', 'dark-theme']),
  changeTheme: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({ theme: store.theme });
const mapDispatchToProps = { changeTheme: toggleTheme };
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
