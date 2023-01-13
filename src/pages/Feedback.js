import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FeedbackInfo from '../components/FeedbackInfo';
import Button from '../components/Button';

class Feedback extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text">Feedback</h1>
        <FeedbackInfo />
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

export default Feedback;
