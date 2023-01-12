
import React, { Component } from "react";
import './data.css'

class DataForm2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      formSubmitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ formSubmitted: true });
  }

  handleReset() {
    this.setState({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      formSubmitted: false
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { name, lastName, phone, email, formSubmitted } = this.state;
    return (
      <div className="App">
        <h1>Welcome! Data #2</h1>

        {formSubmitted ? (
          <div className="form">
            <p>First Name: {name}</p>
            <p>Last Name: {lastName}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <button onClick={this.handleReset}>Reset</button>
          </div>
        ) : (
            <form onSubmit={this.handleSubmit} className='form'>
            <h2>Plese provide the information below:</h2>
            <input type="text" placeholder='First Name' name="name" value={this.state.name} onChange={this.handleChange}/>
            <input type="text" placeholder='Last Name' name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
            <input type="text" placeholder='Phone' name="phone" value={this.state.phone} onChange={this.handleChange}/>
            <input type="email" placeholder='Email Adress' name="email" value={this.state.email} onChange={this.handleChange}/>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default DataForm2;
