import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Feedback extends Component {
  render() {
    const { score, questions } = this.props;
    return (
      <div>
        <div>
          <span data-testid="feedback-total-score">
            {`Total score: ${score}`}
          </span>
        </div>
        <div>
          <span data-testid="feedback-total-question">
            {`Total questions: ${questions}`}
          </span>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
  questions: PropTypes.number.isRequired,
};

export default connect()(Feedback);
