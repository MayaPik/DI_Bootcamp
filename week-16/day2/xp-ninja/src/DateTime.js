import { Component } from "react";

class DateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      dayOfWeek: new Date().getDay(),
      dayOfMonth: new Date().getDate(),
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
    };
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        dayOfWeek: new Date().getDay(),
        dayOfMonth: new Date().getDate(),
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <p>Year: {this.state.year}</p>
        <p>Month: {this.state.month}</p>
        <p>Day of Week: {this.state.dayOfWeek}</p>
        <p>Day of Month: {this.state.dayOfMonth}</p>
        <p>Hour: {this.state.hour}</p>
        <p>Minute: {this.state.minute}</p>
        <p>Second: {this.state.second}</p>
      </div>
    );
  }
}

export default DateTime;
