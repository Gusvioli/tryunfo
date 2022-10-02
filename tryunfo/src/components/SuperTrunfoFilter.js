import PropTypes from 'prop-types';
import React from 'react';

export default class RaridadeCard extends React.Component {
  render() {
    const {
      onbuscaCartas,
    } = this.props;
    return (
      <div>
        <label htmlFor="superTrunfoFilter">
          <span className="span_pesquisa">Super Trunfo:</span>
          <input
            data-testid="trunfo-filter"
            id="superTrunfoFilter"
            type="checkbox"
            name="superTrunfoFilter"
            value="true"
            onChange={ onbuscaCartas }
          />
        </label>
      </div>
    );
  }
}
RaridadeCard.propTypes = {
  onbuscaCartas: PropTypes.func,
}.isRequired;
