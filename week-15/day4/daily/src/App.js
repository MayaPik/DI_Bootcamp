import React, {Component} from "react";

  const State = ({ name, votes, onVote}) => (
    <div>
    <p>{name} {votes}</p>
    <button onClick={onVote}>
      +1
    </button>
  </div>
  );

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages : [
          {name: "Php", votes: 0},
          {name: "Python", votes: 0},
          {name: "JavaSript", votes: 0},
          {name: "Java", votes: 0}
      ]
  }
  }

  handleVote(index) {
    const newLan = this.state.languages;
    newLan[index].votes++
    this.setState({languages :newLan})

  }

  render() {
    return (
      <div>
         {this.state.languages.map((language,index) => (
                    <State
                        name={language.name}
                        votes={language.votes}
                        onVote={() => this.handleVote(index)}
                    />
                ))}
      </div>  
        );
  }
 }

export default App;
