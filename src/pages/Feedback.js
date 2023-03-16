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
    const { assertions } = this.props;
    return (
      <div className="game">
        <Header />
        <h1 data-testid="feedback-text">
          {assertions < three ? 'Could be better...' : 'Well Done!'}
        </h1>
        <FeedbackInfo />
        <Link to="/Projeto-Trivia/">
          <Button
            testId="btn-play-again"
            btnLabel="Play Again"
          />
        </Link>
        <Link to="/Projeto-Trivia/ranking">
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
  assertions: state.player.assertions,
  // score: state.player.score,
});

Feedbacks.propTypes = {
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedbacks);
