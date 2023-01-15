import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true, errorInfo: error });
  }

  occurError() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>An error occurred. {this.state.errorInfo}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
