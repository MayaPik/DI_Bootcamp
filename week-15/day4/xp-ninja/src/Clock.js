import React, {Component} from 'react'

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentDate: new Date()
        }
        this.intervalId = null
    }

    tick() {
        this.setState({
            currentDate : new Date()
        })
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
        this.tick()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It's {this.state.currentDate.toLocaleTimeString()}</h2>
            </div>
        )
    }

}

export default Clock;