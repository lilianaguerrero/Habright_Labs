var tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  }
];

class TradingCard extends React.Component {

  render() {
    return (
      <div className="card">
        <p>Name: {this.props.name}</p>
        <img src={this.props.imgUrl} />
        <p>Skill: {this.props.skill} </p>
      </div>
    );
  }
}

  

class TradingCardContainer extends React.Component {
  constructor() {
      //inherits from parent React.Component
      super();
      //setting the state to an object with lists
      this.state = { cards: [] };  // Set initial value
      //binding this
      this.updateCards = this.updateCards.bind(this);
    }
  }
  updateCards(response) {
    //creating a card
      const cards = response.cards;

      //updating the state
      this.setState({ cards: cards});
      });
    }
  }
  //AJAX GET request to /cards.json, callback updateCards
  getCardData() {
      $.get('/cards.json', this.updateCards);
    }

  //runs the updateCards method
  componentDidMount() {
        this.getCardData();
      }
    }

  render() {
        const tradingCards = [];
        //looping over the card objects
        for (const currentCard of this.state.cards) {
          //appending the cards to the empty tradingCards array
          tradingCards.push(
            <TradingCard
              key={currentCard.name}
              name={currentCard.name}
              skill={currentCard.skill}
              imgUrl={currentCard.imgUrl}
            />
          );
        }
        return (
          <div>{tradingCards}</div>
        );
      }
    }

ReactDOM.render(
  <TradingCardContainer />,
  document.getElementById('container')
);
