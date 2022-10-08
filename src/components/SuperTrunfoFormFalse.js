import PropTypes from 'prop-types';
import React from 'react';

class SuperTrunfoFormFalse extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <div>
        <label htmlFor="superTrunfo">
          Você já tem um Super Trunfo em seu baralho
          <input
            data-testid="trunfo-input"
            id="superTrunfo"
            type="checkbox"
            name="superTrunfo"
            checked={ cardTrunfo === false && '' }
            onChange={ onInputChange }
            className="isVisible"
          />
        </label>
      </div>
    );
  }
}

SuperTrunfoFormFalse.propTypes = {
  cardTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func,
}.isRequired;

export default SuperTrunfoFormFalse;
