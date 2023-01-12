import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    const { history } = this.props;
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
        <Button
          testId="btn-settings"
          btnLabel="Settings"
          handleButton={ () => history.push('/settings') }
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Login);
