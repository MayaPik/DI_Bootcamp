import { Component } from "react";

class customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      loaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/customers")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ customers: data, loaded: true });
      });
  }
  render() {
    if (this.state.loaded) {
      return (
        <div className="App">
          <h1>List of users</h1>
          <ul>
            {this.state.customers.map((user) => {
              return (
                <div key={user.id}>
                  <p>
                    <b>Name:</b> {user.firstName} {user.lastName}
                  </p>
                </div>
              );
            })}
          </ul>
        </div>
      );
    }
    if (!this.state.loaded) {
      return <div>Loading...</div>;
    }
  }
}

export default customers;
