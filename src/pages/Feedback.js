import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

const three = 3;

class Feedbacks extends Component {
  render() {
    const { score } = this.props;
    return (
      <div>
        <Header />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.gamePage.score,
});

Feedbacks.propTypes = {
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedbacks);
