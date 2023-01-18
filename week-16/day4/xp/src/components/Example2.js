import React, { Component } from "react";
import complexData from "../ComplexData";

class Example2 extends Component {
  render() {
    return (
      <div>
        {complexData.Skills.map((each) => (
          <div key={each.Area}>
            {each.Area}
            <ul>
              {each.SkillSet.map((skill, index) => (
                <li key={index}>{skill.Name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
