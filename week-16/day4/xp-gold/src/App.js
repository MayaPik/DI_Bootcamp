import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      id: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      id: Number(this.state.id + 1),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users/", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          className="App"
        >
          {" "}
          <h1>Fetch</h1>
          <input name="name" type={"text"} placeholder="user"></input>
          <input name="email" type={"email"} placeholder="email"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
