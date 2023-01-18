import { Component } from "react";
import axios from "axios";
import "./App.css";

class Axios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      title: null,
      body: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
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
          <h1>Axios</h1>
          <input name="userId" type={"number"} placeholder="user Id"></input>
          <input name="title" type={"text"} placeholder="Title"></input>
          <input name="body" type={"text"} placeholder="Body"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Axios;
