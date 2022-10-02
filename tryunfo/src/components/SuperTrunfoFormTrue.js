import PropTypes from 'prop-types';
import React from 'react';

class SuperTrunfoFormTrue extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <div>
        <label htmlFor="superTrunfo">
          Super Trybe Trunfo:
          <input
            data-testid="trunfo-input"
            id="superTrunfo"
            type="checkbox"
            name="superTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

      </div>
    );
  }
}

SuperTrunfoFormTrue.propTypes = {
  cardTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func,
}.isRequired;

export default SuperTrunfoFormTrue;
