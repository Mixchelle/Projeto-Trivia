import React, { Component } from 'react';
import Header from '../components/Header';

export default class Game extends Component {
  render() {
    return (
      <div>
        <Header
          name="Nome da Pessoa"
          email="alguem@email.com"
        />
        <h1>GamePage</h1>
      </div>
    );
  }
}
