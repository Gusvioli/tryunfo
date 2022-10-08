import './App.css';
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import RaridadeCard from './components/RaridadeCard';
import FiltroDeBusca from './components/FiltroDeBusca';
import SuperTrunfoFilter from './components/SuperTrunfoFilter';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nomeDaCarta: '',
      descricaoDaCarta: '',
      atributoVida: '',
      atributoVelocidade: '',
      atributoResistencia: '',
      imgDaCarta: '',
      raridadeDaCarta: 'normal',
      superTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: 0,
      cartas: [],
      isVisExcluir: true,
      isNoVisExcluir: false,
      id: 0,
      busca: '',
      val: 0,
      isSuperFilter: '',
      cssCardFundo: 'card-Template_normal',
      cssCardST: '',
    };
  }

  onInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const { cartas } = this.state;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
    const noventa = 90;
    if (value !== '') this.setState({ isSaveButtonDisabled: false });
    if (value > noventa) this.setState({ isSaveButtonDisabled: true });
    if (value < noventa) this.setState({ isSaveButtonDisabled: true });

    if (name === 'raridadeDaCarta' && value === 'normal') {
      this.setState({ cssCardFundo: 'card-Template_normal' });
    }
    if (name === 'raridadeDaCarta' && value === 'raro') {
      this.setState({ cssCardFundo: 'card-Template_raro' });
    }
    if (name === 'raridadeDaCarta' && value === 'muito raro') {
      this.setState({ cssCardFundo: 'card-Template_muito_raro' });
    }
    if (name === 'superTrunfo') {
      this.setState({ cssCardST: 'card-Template_super_trunfo' });
    }

    const isTrunfo = cartas.some((fin) => fin[7] === true);
    this.setState({ hasTrunfo: isTrunfo ? 1 : 0 });
  };

  onSaveButtonClick = () => {
    const {
      nomeDaCarta, descricaoDaCarta, atributoVida,
      atributoVelocidade, atributoResistencia,
      imgDaCarta, raridadeDaCarta, superTrunfo,
      isSaveButtonDisabled, cartas, hasTrunfo,
      id, cssCardFundo, cssCardST,
    } = this.state;
    const addId = id + 1;
    const isSuperTrunfo = cartas.some((fin) => fin[7] === true);
    const carta = [
      nomeDaCarta, descricaoDaCarta, atributoVida, atributoVelocidade,
      atributoResistencia, imgDaCarta, raridadeDaCarta,
      isSuperTrunfo ? false : superTrunfo, isSaveButtonDisabled,
      hasTrunfo, id, cssCardFundo, cssCardST,
      isSuperTrunfo ? 'false ' : `${String(superTrunfo)} `,
    ];
    cartas.push(carta);
    this.setState({ cartas });
    localStorage.setItem('cartas', JSON.stringify(cartas));
    this.setState({
      nomeDaCarta: '',
      descricaoDaCarta: '',
      imgDaCarta: '',
      atributoVida: '0',
      atributoVelocidade: '0',
      atributoResistencia: '0',
      raridadeDaCarta: 'normal',
      isSaveButtonDisabled: true,
      id: addId,
    });
    const isTrunfo = cartas.some((fin) => fin[7] === true);
    this.setState({
      hasTrunfo: isTrunfo ? 1 : 0,
    });
  };

  onRemoveButtonClick = (event) => {
    const { cartas, id } = this.state;
    const DEZ = 10;
    cartas.forEach((ma, index) => ma.splice(DEZ, 1, index));
    const idAtual = Number(event.target.id);
    const ver = cartas.filter((fil) => fil[10] !== idAtual);
    this.setState({
      cartas: ver,
      nomeDaCarta: '',
      descricaoDaCarta: '',
      imgDaCarta: '',
      atributoVida: '0',
      atributoVelocidade: '0',
      atributoResistencia: '0',
      raridadeDaCarta: 'normal',
      isSaveButtonDisabled: true,
      hasTrunfo: 0,
      superTrunfo: false,
    });
    if (id > 0) this.setState({ id: id - 1 });
    const isTrunfo = cartas.some((fin) => fin[7] === false);
    this.setState({
      hasTrunfo: isTrunfo ? 0 : 1,
      superTrunfo: false,
    });
  };

  onbuscaCartas = (event) => {
    const { value, id } = event.target;
    const { isSuperFilter } = this.state;
    if (value === 'todas') this.setState({ val: 0, busca: '' });
    if (id === 'nameFilter') this.setState({ val: 0, busca: value });
    if (id === 'rareFilter' && value !== 'todas') this.setState({ val: 6, busca: value });
    if (id === 'superTrunfoFilter') {
      this.setState((prevState) => ({
        isSuperFilter: !prevState.isSuperFilter,
        busca: 'true',
        val: 11,
      }));
    }
    if (isSuperFilter === true && id === 'superTrunfoFilter') {
      this.setState(({ busca: '' }));
    }
  };

  onParametrosCards = () => {
    const { cartas, busca, isVisExcluir, val } = this.state;
    const SEIS = 6;
    // console.log(cartas);
    // const ver = JSON.parse(localStorage.getItem('cartas'));
    const arr = cartas.filter((fil) => (val === SEIS
      ? fil.includes(busca) : fil[val].includes(busca)));
    return arr.map((ma, index) => (<Card
      key={ index }
      cardName={ ma[0] }
      cardDescription={ ma[1] }
      cardAttr1={ ma[2] }
      cardAttr2={ ma[3] }
      cardAttr3={ ma[4] }
      cardImage={ ma[5] }
      cardRare={ ma[6] }
      cardTrunfo={ ma[7] }
      onRemoveButtonClick={ this.onRemoveButtonClick }
      isVisExcluir={ isVisExcluir }
      id={ index }
      cssCardFundo={ ma[11] }
      cssCardST={ ma[12] }
    />));
  };

  render() {
    const {
      nomeDaCarta, descricaoDaCarta, atributoVida,
      atributoVelocidade, atributoResistencia, imgDaCarta,
      raridadeDaCarta, superTrunfo, isSaveButtonDisabled,
      hasTrunfo, cartas, isNoVisExcluir, isSuperFilter, cssCardFundo, cssCardST,
    } = this.state;
    return (
      <div className="tryunfo">
        <header><h1>Tryunfo - Wars</h1></header>
        <div className="corpo__tryunfo">
          <Form
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            cardName={ nomeDaCarta }
            cardDescription={ descricaoDaCarta }
            cardAttr1={ atributoVida }
            cardAttr2={ atributoVelocidade }
            cardAttr3={ atributoResistencia }
            cardImage={ imgDaCarta }
            cardRare={ raridadeDaCarta }
            cardTrunfo={ superTrunfo }
            superTrunfo={ superTrunfo }
            hasTrunfo={ hasTrunfo }
            cartas={ cartas }
          />
          <Card
            cardName={ nomeDaCarta }
            cardDescription={ descricaoDaCarta }
            cardAttr1={ atributoVida }
            cardAttr2={ atributoVelocidade }
            cardAttr3={ atributoResistencia }
            cardImage={ imgDaCarta }
            cardRare={ raridadeDaCarta }
            cardTrunfo={ superTrunfo }
            isNoVisExcluir={ isNoVisExcluir }
            cssCardFundo={ cssCardFundo }
            cssCardST={ cssCardST }
            superTrunfo={ superTrunfo }
          />
        </div>
        <div className="corpo__tryunfo__pesquisa">
          <FiltroDeBusca
            onbuscaCartas={ this.onbuscaCartas }
            isSuperFilter={ isSuperFilter }
          />
          <RaridadeCard
            onbuscaCartas={ this.onbuscaCartas }
            isSuperFilter={ isSuperFilter }
          />
          <SuperTrunfoFilter
            onbuscaCartas={ this.onbuscaCartas }
          />
        </div>
        <div className="conteudo__card">
          {this.onParametrosCards()}
        </div>
      </div>
    );
  }
}
