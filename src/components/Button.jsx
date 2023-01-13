import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { testId, btnLabel, isDisabled, handleButton, buttonClassCss } = this.props;
    return (
      <button
        type="button"
        data-testid={ testId }
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
  handleButton: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  buttonClassCss: PropTypes.string,
};

Button.defaultProps = {
  isDisabled: false,
  buttonClassCss: '',
};

export default Button;
