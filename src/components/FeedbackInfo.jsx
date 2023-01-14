import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Feedback extends Component {
  render() {
    const { score, assertions } = this.props;
    return (
      <div>
        <div>
          <span data-testid="feedback-total-score">
            { score }
          </span>
        </div>
        <div>
          <span data-testid="feedback-total-question">
            { assertions }
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
});

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
