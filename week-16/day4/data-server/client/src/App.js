import { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      msgFromServer: "",
    };
  }
  async componentDidMount() {
    const res = await axios({
      url: "http://localhost:3003/api/submit",
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
    });
    const data = res.data;
    this.setState((state, props) => {
      return { data };
    });
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios({
      url: "http://localhost:3003/api/submit",
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      responseType: "text",
      data: this.state.input,
    });
    const data = res.data;
    this.setState({ msgFromServer: data });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
        <p>{this.state.msgFromServer}</p>
      </form>
    );
  }
}

export default App;
