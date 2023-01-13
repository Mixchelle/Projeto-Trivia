import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import FeedbackInfo from '../components/FeedbackInfo';

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
        <Link to="/ranking">
          <Button
            testId="btn-ranking"
            btnLabel="Ranking"
          />
        </Link>
      </div>
    );
  }
}

export default Feedback;
