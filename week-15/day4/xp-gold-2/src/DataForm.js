import React, {Component} from 'react';
import './data.css'
class DataForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      genre: "",
      year: "",
      formSubmitted: false

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const book = { title: this.state.title, author: this.state.author, genre: this.state.genre, year: this.state.year};
    console.log(book)
    this.setState({formSubmitted: true});


  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    let header;
    if(this.state.formSubmitted) {
        header = <h4>Form Submitted! </h4>;
    }  
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} className='form'>
          <h1>New Book ! Data #1</h1>
          {header}
          <input type="text" placeholder='Title' name="title" value={this.state.title} onChange={this.handleChange}/>
          <input type="text" placeholder='Author' name="author" value={this.state.author} onChange={this.handleChange}/>
          <input type="text" placeholder='Genre' name="genre" value={this.state.genre} onChange={this.handleChange}/>
          <input type="text" placeholder='year Published' name="year" value={this.state.year} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default DataForm;
