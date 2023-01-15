import { Component } from "react";
import quotes from "./QuotesDatabase";
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:"",
      author:"",
      prevIndexes: [],
      backgroundcolor: ''
    }
    
  }
  getNewOne = (event) => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    (this.state.prevIndexes).includes(randomIndex) ? 
    this.getNewOne() :
    this.setState({quote: quotes[randomIndex].quote, 
      author: quotes[randomIndex].author,
      prevIndexes: [...this.state.prevIndexes,randomIndex],
      backgroundcolor: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
    })  
  }

  componentDidMount() {
    this.getNewOne()
  }

  render() {
  return (
    <div className="App" style={{backgroundColor: this.state.backgroundcolor}}>
      <div className="App-header" style={{color: this.state.backgroundcolor}}>
      <h2 className="quote">{this.state.quote}</h2>
      <p className="author">- {this.state.author}</p>
      <button onClick={this.getNewOne} style={{backgroundColor: this.state.backgroundcolor}}>Genarate Quote</button>
      </div>
    </div>
  );
  }
}

export default App;
