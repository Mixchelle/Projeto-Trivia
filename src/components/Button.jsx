import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      testId,
      btnLabel,
      isDisabled,
      handleButton,
      buttonClassCss,
      id,
    } = this.props;

    return (
      <button
        type="button"
        data-testid={ testId }
        id={ id }
        disabled={ isDisabled }
        onClick={ handleButton }
        className={ buttonClassCss }
      >
        {btnLabel}
      </button>
    );
  }
}

Button.propTypes = {
  testId: PropTypes.string.isRequired,
  btnLabel: PropTypes.string.isRequired,
  handleButton: PropTypes.func,
  isDisabled: PropTypes.bool,
  buttonClassCss: PropTypes.string,
  id: PropTypes.string,
};

Button.defaultProps = {
  isDisabled: false,
  buttonClassCss: '',
  handleButton: null,
  id: '',
};

export default Button;
