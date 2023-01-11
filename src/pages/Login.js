import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = ({ target: { id, value } }) => {
    this.setState({
      [id]: value,
    });
  };

  handleClick = () => {

  };

  render() {
    const { name, email } = this.state;
    return (
      <>
        <Input
          type="text"
          labelName="Nome: "
          id="name"
          testId="input-player-name"
          placeholder="Digite seu nome"
          value={ name }
          handleInput={ this.handleChange }
        />
        <Input
          type="email"
          labelName="Email: "
          id="email"
          testId="input-gravatar-email"
          placeholder="ada@lovelace.com"
          value={ email }
          handleInput={ this.handleChange }
        />
        <Button
          testId="btn-play"
          btnLabel="Play"
          isDisabled={ !(name.length > 0 && email.length > 0) }
          handleButton={ this.handleClick }
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Login);
