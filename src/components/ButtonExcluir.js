import PropTypes from 'prop-types';
import React from 'react';

class ButtonExcluir extends React.Component {
  render() {
    const {
      onRemoveButtonClick,
      id,
    } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-button"
        className="remover__carta"
        onClick={ onRemoveButtonClick }
        id={ id }
      >
        Excluir
      </button>

    );
  }
}

ButtonExcluir.propTypes = {
  id: PropTypes.string,
  onRemoveButtonClick: PropTypes.func,
}.isRequired;

export default ButtonExcluir;
