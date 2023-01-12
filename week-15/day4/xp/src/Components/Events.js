import React , {Component} from 'react';

const clickMe = () => {
    alert('I was CLICKED')
}


const handleKeyPress = (event) => {
    if (event.key === "Enter") {
        alert(`Enter key was pressed! your input- ${event.target.value}`);
      }
}



class Events extends Component {
    constructor(props) {
        super(props)
        this.state= {
            isToggleOn: true
        }
        }
    render() {
        return (
        <div>
        <input id='input' onKeyPress={handleKeyPress}></input>
        <button onClick={clickMe}>Click Me</button><br></br>
        <button onClick={() => this.setState({ isToggleOn: !this.state.isToggleOn })}>Click to change : {this.state.isToggleOn? "Yes" : "No"}</button>
        </div>
        )
    }
}

export default Events;
