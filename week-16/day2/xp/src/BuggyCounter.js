import { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      show: true,
    };
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  deleteHello = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    let comp;
    if (this.state.show) {
      comp = <Child />;
    }
    if (this.state.counter === 5) {
      throw new Error("I crashed!");
    }

    return (
      <>
        {comp}
        <ErrorBoundary>
          <div>
            <button onClick={() => this.deleteHello()}>Delete</button>
            <button onClick={() => this.handleClick()}>Add +</button>
            <p>Result: {this.state.counter}</p>
          </div>
        </ErrorBoundary>
      </>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert("Unmounting...");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}
export default BuggyCounter;
