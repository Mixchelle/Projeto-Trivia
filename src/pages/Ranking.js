import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

class Ranking extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <Link to="/">
          <Button
            testId="btn-go-home"
            btnLabel="Inicio"
          />
        </Link>
      </div>
    );
  }
}

export default Ranking;
