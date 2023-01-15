import Modal from "./Modal";
import ErrorBoundary from "./ErrorBoundary";
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      errorInfo: null,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.catchError = this.catchError.bind(this);
  }

  catchError = (errorInfo) => {
    this.setState({ errorInfo: errorInfo });
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>Open Modal</button>
        {this.state.showModal && (
          <ErrorBoundary catchError={this.catchError}>
            <Modal onClose={this.toggleModal}>
              <p>{this.state.errorInfo}</p>
            </Modal>
          </ErrorBoundary>
        )}
      </div>
    );
  }
}

export default App;
