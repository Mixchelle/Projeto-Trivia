import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';

export default class Feedbacks extends Component {
  render() {
    return (
      <div>
        <Header />
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
