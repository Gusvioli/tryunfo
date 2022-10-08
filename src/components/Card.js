import PropTypes from 'prop-types';
import React from 'react';
import ButtonExcluir from './ButtonExcluir';

class Card extends React.Component {
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
      onRemoveButtonClick,
      isVisExcluir,
      cssCardFundo,
      id,
      cssCardST,
    } = this.props;

    return (
      <div className={ cssCardFundo }>
        <div className="img__default">
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </div>
        <div className="card__name" data-testid="name-card">{cardName}</div>
        <div
          className="card__description"
          data-testid="description-card"
        >
          {cardDescription}

        </div>
        <div className="atributos">
          <div data-testid="attr1-card">{cardAttr1}</div>
          <div data-testid="attr2-card">{cardAttr2}</div>
          <div data-testid="attr3-card">{cardAttr3}</div>
        </div>
        <div data-testid="rare-card">{cardRare}</div>
        {cardTrunfo ? (
          <div data-testid="trunfo-card" className={ cssCardST }>Super Trunfo</div>
        ) : (
          ''
        )}
        {isVisExcluir === true ? (
          <ButtonExcluir
            onRemoveButtonClick={ onRemoveButtonClick }
            id={ id }
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  id: PropTypes.string,
  cssCardFundo: PropTypes.string,
  isVisExcluir: PropTypes.bool,
  onRemoveButtonClick: PropTypes.func,
}.isRequired;

export default Card;
