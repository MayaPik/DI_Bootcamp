import { Component } from "react";
import "./App.css";
class PortList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data });
      });
  }
  render() {
    if (this.state.posts) {
      return (
        <div className="App">
          <h1>List of posts</h1>
          {this.state.posts.map((post) => {
            return (
              <div>
                <p key={post.id}>Id: {post.id}</p>
                <p key={post.id}>Title: {post.title}</p>
                <p key={post.id}>Body: {post.body}</p>
                <br />
              </div>
            );
          })}
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default PortList;
