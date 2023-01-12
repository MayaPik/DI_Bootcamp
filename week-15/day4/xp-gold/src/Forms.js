import React, {Component} from 'react';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
        username: "",
        age:null,
        selectedCar: ""
        };
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeCar = this.handleChangeCar.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);


      }
      handleChangeName(event) {
        this.setState({
          username: event.target.value,
        });
      }
      
      handleChangeAge(event) {
        this.setState({
          age: event.target.value,
        });
      }
      handleChangeCar(event) {
        this.setState({
          selectedCar: event.target.value
        });
      }
      handleSubmit(event) {
        event.preventDefault();
        alert(`You are submitting: ${this.state.username}`);
      
      }


  render() {
    let header;
    if(this.state.username && this.state.age) {
        header = <h1>Hello {this.state.username}! you are {this.state.age} years old</h1>;
    }   
     return (
        <div>
            {header}
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" onChange={this.handleChangeName} value={this.state.username} placeholder='name'/> <br></br>
            <input type='number' name="age" onChange={this.handleChangeAge} value={this.state.age} placeholder='age' /><br></br><br></br>
            <textarea value={'textarea text area'}></textarea> <br></br>
            <select onChange={this.handleChange} value={this.state.selectedCar}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
<br></br>
            <button typpe='submit'/>
            </form>
        </div>
    )
  }
}

export default Forms;