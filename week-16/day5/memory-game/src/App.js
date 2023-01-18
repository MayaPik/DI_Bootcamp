import { Component } from "react";
import "./App.css";
import superheroes from "./superheroes";
class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: superheroes.superheroes,
      points: 0,
      record: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem("record", JSON.stringify(this.state.record));
  }

  componentDidMount() {
    const record = JSON.parse(localStorage.getItem("record"));
    if (record) {
      this.setState({ record });
    }
    this.setState({ cards: superheroes.superheroes, points: 0 });
  }

  handleClick = (e) => {
    const cardId = e.target.dataset.id;
    if (this.state.cards[cardId].clicked === false) {
      this.setState((prevState) => {
        const cards = [...prevState.cards];
        cards[cardId].clicked = true;
        cards.sort(() => Math.random() - 0.5);

        return { cards };
      });
      this.setState({ points: this.state.points + 1 });
    } else {
      if (this.state.points > this.state.record) {
        this.setState({ record: this.state.points });
        localStorage.setItem("record", JSON.stringify(this.state.record));
      }
      window.location.reload();
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">Game Of Memory!</h1>
        <h2>current points: {this.state.points}</h2>
        <h3>Record: {this.state.record}</h3>
        <div className="list">
          {this.state.cards.map((card) => {
            return (
              <div
                className="card"
                data-id={card.id}
                key={card.id}
                onClick={this.handleClick}
              >
                <img
                  data-id={card.id}
                  key={card.id}
                  onClick={this.handleClick}
                  src={card.image}
                  alt={card.name}
                  className="image"
                />
                <p>
                  Name : {card.name} <br />
                  <br /> Role: {card.occupation}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
