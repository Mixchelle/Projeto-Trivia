import React, { Component } from 'react';
import Header from '../components/Header';

export default class Feedbacks extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text">Feedback</h1>
      </div>
    );
  }
}
