import { string } from "mathjs";
import { Component } from "react";
import "./App.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: "",
      secondNum: "",
      theSign: null,
      result: 0,
      answer: "",
    };
  }

  handleClick(number) {
    if (!this.state.theSign) {
      this.setState({
        firstNum: String(this.state.firstNum + number),
        answer: this.state.answer + string(number),
      });
    } else {
      this.setState({
        secondNum: String(this.state.secondNum + number),
        answer: this.state.answer + string(number),
      });
    }
  }

  handleSign(sign) {
    this.setState({
      theSign: String(sign),
      answer: this.state.answer + string(sign),
    });
  }

  equal = () => {
    this.setState(
      {
        firstNum: Number(this.state.firstNum),
        secondNum: Number(this.state.secondNum),
      },
      () => {
        this.setState(
          {
            result: eval(
              `${this.state.firstNum} ${this.state.theSign} ${this.state.secondNum}`
            ).toFixed(3),
          },
          () => {
            this.setState({
              answer: String(this.state.result),
              secondNum: "",
              theSign: null,
              firstNum: Number(this.state.result),
            });
          }
        );
      }
    );
  };

  clear = () => {
    this.setState({
      firstNum: "",
      secondNum: "",
      theSign: null,
      result: 0,
      answer: "",
    });
  };

  render() {
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
    const signs = ["+", "-", "*", "/"];

    return (
      <div className="calculator">
        <div className="calculator__display ">{this.state.answer}</div>
        {numbers.map((number) => (
          <button
            className="calculator__button--number calculator__button"
            key={number}
            onClick={() => this.handleClick(number)}
          >
            {number}
          </button>
        ))}
        {signs.map((sign) => (
          <button
            className="calculator__button--operator calculator__button"
            key={sign}
            onClick={() => this.handleSign(sign)}
          >
            {sign}
          </button>
        ))}
        <button
          className="calculator__button--equal calculator__button"
          onClick={() => this.equal()}
        >
          =
        </button>
        <button
          className="calculator__button--clear calculator__button"
          onClick={() => this.clear()}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default Calculator;
