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
        <label htmlFor="nameFilter">
          <span className="span_pesquisa">Filtro de busca:</span>
          <input
            data-testid="name-filter"
            type="text"
            id="nameFilter"
            onChange={ onbuscaCartas }
            disabled={ isSuperFilter }
          />
        </label>
      </div>
    );
  }
}
RaridadeCard.propTypes = {
  isSuperFilter: PropTypes.bool,
  onbuscaCartas: PropTypes.func,
}.isRequired;
