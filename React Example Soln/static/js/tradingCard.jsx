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

class HomePage extends React.Component {
  render() {
  return (
    <div> i am the homepage </div>
  );
  }
}

class AboutPage extends React.Component {
  render() {
  return (
    <div> about stuff </div>
  );
  }
}

class DoStuffPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: undefined, number:  undefined}
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('handle submission')
    let name = this.state.name;
    let number = this.state.number;

    if (name.length < 3) {
      this.setState({showError: True})
      return
    }

    let data = {
      name: this.state.name,
      number: this.state.number
    }

    $.post('/make_user', data, (response) => console.log(response))

  }

  render() {
  console.log(this.state)

  if (this.state.showError) {
    <div> oh no! please enter at least 3 charecters </div>
  }

  return (
    <form> 
      <label>
        Name:
        <input name='name' onChange={this.handleInput} type="text"/> 
      </label>
      <label>
        Number:
        <input name='number' onChange={this.handleInput} type="text"/>  
      </label>
      <button onClick={this.handleSubmit}> submit </button>
    </form>
  );
  }
}


class App extends React.Component {
  constructor() {
    super();

    this.state = { currentPage: 0, pages: [<HomePage/>, <AboutPage/>, <DoStuffPage/>] };  // Set initial value
    // this.updateCards = this.updateCards.bind(this);
  }

  updateCards(response) {
    // console.log(response)
    // const cards = response.cards;
    // this.setState({ cards: cards });
  // }

  // getCardData() {
    // $.get('/cards.json', this.updateCards);
  // }

  componentDidMount() {
    // this.getCardData();
  }

  render() {
    // const tradingCards = [];

    // if (this.state.cards.length === 0) {
    //   return (
    //     <div> ... Loading ... </div>
    //   )
    // }

    // for (const currentCard of this.state.cards) {
    //   tradingCards.push(
    //     <TradingCard
    //       key={currentCard.name}
    //       name={currentCard.name}
    //       skill={currentCard.skill}
    //       imgUrl={currentCard.imgUrl}
    //     />
    //   );
    // }

    return (
      <div>
        <div>
          <button onClick={() => this.setState({currentPage: 0})}> Homepage </button>
          <button onClick={() => this.setState({currentPage: 2})}> Do Stuff </button>
          <button onClick={() => this.setState({currentPage: 1})}> About </button>
        </div>
        <div>
          {this.state.pages[this.state.currentPage]}
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('container'));
