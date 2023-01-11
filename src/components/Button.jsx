import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { testId, btnLabel, isDisabled, handleButton } = this.props;
    return (
      <button
        type="button"
        data-testid={ testId }
        disabled={ isDisabled }
        onClick={ handleButton }
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
};

Button.defaultProps = {
  isDisabled: false,
};

export default Button;
