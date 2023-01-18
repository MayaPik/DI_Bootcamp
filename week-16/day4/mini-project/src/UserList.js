import { Component } from "react";
import "./App.css";
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loaded: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data, loaded: true });
      });
  }
  render() {
    if (this.state.loaded) {
      return (
        <div className="App">
          <h1>List of users</h1>
          <ul>
            {this.state.users.map((user) => {
              return (
                <div key={user.id}>
                  <p>
                    <b>Name:</b> {user.name}{" "}
                  </p>
                  <p>
                    <b>UserName:</b> {user.username}{" "}
                  </p>
                  <p>
                    <b>Email:</b>
                    {user.email}
                  </p>
                  <p>
                    <b>City:</b> {user.address.city}{" "}
                  </p>
                  <br />
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

export default UserList;
