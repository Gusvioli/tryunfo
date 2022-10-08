import PropTypes from 'prop-types';
import React from 'react';
import SuperTrunfoFormTrue from './SuperTrunfoFormTrue';
import SuperTrunfoFormFalse from './SuperTrunfoFormFalse';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form encType="submit">
        <label htmlFor="nomeDaCarta">
          <span>Nome:</span>
          <input
            data-testid="name-input"
            id="nomeDaCarta"
            type="text"
            name="nomeDaCarta"
            placeholder="Digite aqui"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descricaoDaCarta">
          <span>Descrição:</span>
          <textarea
            data-testid="description-input"
            placeholder="Digite aqui"
            id="descricaoDaCarta"
            name="descricaoDaCarta"
            value={ cardDescription }
            onChange={ onInputChange }
            maxLength="180px"
            rows="7"
            cols="40"
          />
        </label>
        <label htmlFor="atributoVida">
          <span>Vida:</span>
          <input
            data-testid="attr1-input"
            id="atributoVida"
            type="number"
            name="atributoVida"
            placeholder="Digite aqui"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributoVelocidade">
          <span>Velocidade:</span>
          <input
            data-testid="attr2-input"
            id="atributoVelocidade"
            type="number"
            name="atributoVelocidade"
            placeholder="Digite aqui"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributoResistencia">
          <span>Resistência:</span>
          <input
            data-testid="attr3-input"
            id="atributoResistencia"
            type="number"
            name="atributoResistencia"
            placeholder="Digite aqui"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="imgDaCarta">
          <span>Imagem:</span>
          <input
            data-testid="image-input"
            id="imgDaCarta"
            type="text"
            name="imgDaCarta"
            placeholder="Digite aqui"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="raridadeDaCarta">
          <span>Tipo:</span>
          <select
            data-testid="rare-input"
            name="raridadeDaCarta"
            id="raridadeDaCarta"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        { hasTrunfo === 0 ? <SuperTrunfoFormTrue
          cardTrunfo={ cardTrunfo }
          onInputChange={ onInputChange }
        /> : <SuperTrunfoFormFalse
          cardTrunfo={ cardTrunfo }
          onInputChange={ onInputChange }
        /> }
        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  cartas: PropTypes.array,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
