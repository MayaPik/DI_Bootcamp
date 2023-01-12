import React, { Component } from 'react';

class Garage extends Component {
    render() {
        return <h2>Who lives in my {this.props.size} garage?</h2>;
    }
}

export default Garage;
