import { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="modal" style={modalStyle}>
        {this.props.children}
        <button onClick={this.props.onClose}>Close</button>
      </div>
    );
  }
}

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "green",
  padding: "20px",
  zIndex: "99",
};

export default Modal;
