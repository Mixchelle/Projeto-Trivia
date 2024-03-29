import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

import logo from '../trivia.png';

class Header extends Component {
  render() {
    const { player: { name, gravatarEmail, score } } = this.props;
    const emailString = md5(gravatarEmail).toString();

    return (
      <div className="header">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <img
          className="gravatar"
          src={ `https://www.gravatar.com/avatar/${emailString}` }
          alt="Profile"
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">
          Player:
          { name }
        </p>
        <p data-testid="header-score">
          Seu score:
          { ' ' }
          { score }
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

Header.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    gravatarEmail: PropTypes.string,
    score: PropTypes.number,
  }),
};

Header.defaultProps = {
  player: {
    name: '',
    gravatarEmail: '',
    score: 0,
  },
};

export default connect(mapStateToProps)(Header);
