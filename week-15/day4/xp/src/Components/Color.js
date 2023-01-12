import React , {Component} from 'react';

class Color extends Component {
    constructor(props) {
    super(props)
    this.state = {
        favoriteColor: 'red'
    };
    }
    componentDidMount() {
        setTimeout(() => {
        this.setState(() => {
                return { favoriteColor: 'yellow'
            };
              })
        }, 5000);
    }

    changeColor =() => {
        this.setState( {favoriteColor: 'blue'})
    }
    render() {
        return (
            <div>
            <h1>My favorie color is : {this.state.favoriteColor}</h1>
            <button onClick={this.changeColor}>Change color to blue</button>
       </div>
        ) 
    }
    
}

export default Color;
