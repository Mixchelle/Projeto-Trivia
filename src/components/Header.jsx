import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const name = 'Nome da pessoa';
    const url = 'https://www.gravatar.com/avatar/c19ad9dbaf91c5533605fbf985177ccc';
    const score = 0;
    return (
      <div>
        <img
          src={ url }
          alt="Profile"
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">{ name }</p>
        <p data-testid="header-score">{ score }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

// Header.propTypes = {
//   name: PropTypes.string.isRequired,
// };

export default connect(mapStateToProps)(Header);
