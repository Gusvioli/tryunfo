import PropTypes from 'prop-types';
import React from 'react';

export default class RaridadeCard extends React.Component {
  render() {
    const {
      onbuscaCartas,
      isSuperFilter,
    } = this.props;
    return (
      <div>
        <label htmlFor="rareFilter">
          <span className="span_pesquisa">Raridade:</span>
          <select
            data-testid="rare-filter"
            name="rareFilter"
            id="rareFilter"
            onChange={ onbuscaCartas }
            disabled={ isSuperFilter }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
      </div>
    );
  }
}

RaridadeCard.propTypes = {
  onbuscaCartas: PropTypes.func,
}.isRequired;
