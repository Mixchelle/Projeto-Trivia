import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import FeedbackInfo from '../components/FeedbackInfo';

const three = 3;

class Feedbacks extends Component {
  render() {
    const { questions } = this.props;
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text">
          {questions < three ? 'Could be better...' : 'Well Done!'}
        </h1>
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

const mapStateToProps = (state) => ({
  questions: state.questions,
});

Feedbacks.propTypes = {
  questions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedbacks);
