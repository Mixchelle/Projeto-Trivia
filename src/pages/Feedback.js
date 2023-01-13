import React, { Component } from 'react';
import Header from '../components/Header';
import FeedbackInfo from '../components/FeedbackInfo';

class Feedback extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text">Feedback</h1>
        <FeedbackInfo />
      </div>
    );
  }
}

export default Feedback;
