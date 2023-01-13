import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';

class Feedbacks extends Component {
  render() {
    return (
      <div>
        <Header />
        <Link to="/">
          <Button
            testId="btn-play-again"
            btnLabel="Play Again"
          />
        </Link>
      </div>
    );
  }
}

Feedbacks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Feedbacks;
