import { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      count: 0,
      errorinfo: "",
    };
  }
  componentDidCatch(error, info) {
    console.log(info.componentStack);
    this.setState({
      hasError: true,
      errorinfo: info.componentStack,
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>This app has an error</h1>
          <p>info: {this.state.errorinfo}</p>
        </>
      );
    }
    return this.props.children;
  }
}
