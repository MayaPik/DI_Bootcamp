import { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      age: null,
      gender: null,
      destinaiton: null,
      diet: { nuts: false, vegan: false, lactose: false },
    };
  }

  handleChange = (event) => {
    if (event.target.type === "checkbox") {
      this.setState({ [event.target.name]: event.target.checked });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  handleSubmit = () => {
    let diet = "";
    if (this.state.diet.nuts) {
      diet += "nuts&";
    }
    if (this.state.diet.vegan) {
      diet += "vegan&";
    }
    if (this.state.diet.lactose) {
      diet += "lactoseFree&";
    }
    const { firstName, lastName, age, gender, destination } = this.state;
    const queryString = `firstName=${firstName}&lastName=${lastName}&age=${age}&gender=${gender}&destination=${destination}&${diet}`;
    window.history.pushState(null, null, `?${queryString}`);
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            First Name: <br></br>
            <input type="text" name="firstName" onChange={this.handleChange} />
          </label>
          <label>
            Last Name: <br></br>
            <input type="text" name="lastName" onChange={this.handleChange} />
          </label>
          <label>
            Age: <br></br>
            <input type="number" name="age" onChange={this.handleChange} />
          </label>
          <label>
            Gender:
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={this.handleChange}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={this.handleChange}
            />{" "}
            Female
          </label>
          <label>
            Destinaiton: <br></br>
            <select name="destinaiton" onChange={this.handleChange}>
              <option value="Thiland">Thiland</option>
              <option value="Brazil">Brazil</option>
              <option value="Japan">Japan</option>
            </select>
          </label>
          <label>
            Dietary restrictions
            <div>
              <input
                onChange={this.handleChange}
                type="checkbox"
                value="nuts"
                name="nuts"
              />
              <label for="nuts">Nuts</label>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                type="checkbox"
                value="lactose"
                name="lactose"
              />
              <label for="lactose">Lactose free</label>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                type="checkbox"
                value="vegan"
                name="vegan"
              />
              <label for="vegan">Vegan</label>
            </div>
          </label>
          <button type="submit">Submit</button>
        </form>
        <div className="answers">
          <p>
            Your name: {this.state.firstName} {this.state.lastName}
          </p>
          <p>Age: {this.state.age}</p>
          <p>Gender: {this.state.gender}</p>
          <p>Destinaiton: {this.state.destinaiton}</p>
          <p>Food restrictions:</p>
          <p>{this.state.nuts ? "Nuts free" : null}</p>
          <p>{this.state.lactose ? "Lactose free" : null}</p>
          <p>{this.state.vegan ? "Vegan" : null}</p>
        </div>
      </div>
    );
  }
}

export default App;
