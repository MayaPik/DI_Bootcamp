import { Component } from "react";
import data from "../data";

class PortList extends Component {
  render() {
    return (
      <div>
        {data.map((each) => (
          <div>
            <h1>{each.title}</h1>
            <h2>{each.content}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default PortList;
