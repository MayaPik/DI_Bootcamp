import React , {Component} from 'react';

class Car extends Component {
    constructor(props) {
    super(props)
    this.state= {
        color: 'red'
    }
    }
    render() {
        return <h1>This car is a {this.state.color} {this.props.car.model}</h1>
    }
}

export default Car;
