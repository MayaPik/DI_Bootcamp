import { Component } from "react";
import countries from "./countries";

class AutoCompletedText extends Component {
  constructor() {
    super();
    this.state = {
      suggestions: [],
      text: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({ suggestions: countries });
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
      suggestions: countries.filter(
        (country) =>
          country.toLowerCase().indexOf(event.target.value.toLowerCase()) === 0
      ),
    });
  };

  handleClick = (event) => {
    this.setState({
      text: event.target.innerHTML,
      suggestions: [],
    });
  };

  render() {
    return (
      <div>
        <h1> React Autocomplete Search! </h1>
        <input
          type={"text"}
          onChange={this.handleChange}
          value={this.state.text}
        />
        <div>
          <h3>countries:</h3>
          {this.state.suggestions.map((suggest, index) => {
            return (
              <p key={index} onClick={this.handleClick}>
                {suggest}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AutoCompletedText;
