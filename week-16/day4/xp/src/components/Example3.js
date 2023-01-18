import React, { Component } from "react";
import complexData from "../ComplexData";

class Example3 extends Component {
  render() {
    return (
      <div>
        {complexData.Experiences.map((each) => (
          <div key={each.companyName}>
            <a href={each.url}> {each.companyName}</a>
            <img src={each.logo} alt="worker" />
            {each.roles.map((role, index) => (
              <ul>
                <li key={index}>{role.title}</li>
                <li key={index}>{role.startDate}</li>
                <li key={index}>{role.description}</li>
                <li key={index}>{role.location}</li>
              </ul>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
