import React , {Component} from 'react';

class Phone extends Component {
    constructor(props) {
    super(props)
    this.state = {
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020
    };
    }
    render() {
        return (<div>
            <h1>This Phone is a {this.state.brand}, it is a {this.state.color} {this.state.model} from {this.state.year}</h1>
        <button onClick={() => this.setState({ color: 'red'})}>Change Color</button>
        </div>) 

    }
}

export default Phone;
