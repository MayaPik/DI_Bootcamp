import { Component } from "react";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorInfo: error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      let newStack = JSON.stringify(this.state.errorInfo);

      return (
        <div>
          <h2>An error has occurred</h2>
          <pre>{newStack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
