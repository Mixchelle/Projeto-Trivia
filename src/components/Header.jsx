import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class Header extends Component {
  render() {
    const { name, email, score } = this.props;
    const emailString = md5(email).toString();
    console.log({ name, email, emailString, score });
    return (
      <div>
        <img
          src={ `https://www.gravatar.com/avatar/${emailString}` }
          alt="Profile"
          data-testid="header-profile-picture"
        />
        <p>Score</p>
        <p data-testid="header-player-name">{ name }</p>
        <p data-testid="header-score">{ score }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.login.name,
  email: state.login.email,
  score: state.login.score,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
