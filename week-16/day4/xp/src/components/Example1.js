import { Component } from "react";
import complexData from "../ComplexData";

class Example1 extends Component {
  render() {
    return (
      <div>
        {complexData.SocialMedias.map((each) => (
          <ul>
            <li>{each}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Example1;
