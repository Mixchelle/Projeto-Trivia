import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, labelName, id, testId, placeholder, value, handleInput } = this.props;
    return (
      <label htmlFor={ id }>
        {labelName}
        <input
          type={ type }
          id={ id }
          data-testid={ testId }
          placeholder={ placeholder }
          value={ value }
          onChange={ handleInput }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  labelName: PropTypes.string,
  testId: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};

Input.defaultProps = {
  id: '',
  placeholder: '',
  labelName: '',
};

export default Input;
