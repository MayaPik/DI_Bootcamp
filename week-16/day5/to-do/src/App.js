import { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      text: "",
      id: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem("todo", JSON.stringify(this.state.todo));
  }

  componentDidMount() {
    const todo = JSON.parse(localStorage.getItem("todo"));
    if (todo) {
      this.setState({ todo });
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      e.preventDefault();
      let task = { id: this.state.todo.length + 1, name: e.target.value };
      e.target.value = "";
      this.setState((prevState) => {
        return {
          todo: [...prevState.todo, task],
          text: "",
        };
      });
    }
  };

  deleteTask = (index) => {
    this.setState((prevState) => {
      const updatedTodo = [...prevState.todo];
      updatedTodo.splice(index, 1);
      return {
        todo: updatedTodo,
      };
    });
  };

  markDown = (e) => {
    e.target.className = "task-done";
  };

  noMarkDown = (e) => {
    e.target.className = "task";
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">Maya's React Todo list </h1>
        <div className="list">
          {this.state.todo.map((task) => {
            return (
              <p
                className="task"
                key={task.id}
                onMouseDown={this.deleteTask}
                onMouseOver={this.markDown}
                onMouseLeave={this.noMarkDown}
              >
                {task.name}
              </p>
            );
          })}
        </div>
        <form onSubmit={this.handleSubmit} className="form">
          <span>Add a new task:</span>
          <input
            className="input"
            type={"text"}
            onChange={this.handleChange}
            onKeyDown={this.handleKeypress}
          ></input>
        </form>
      </div>
    );
  }
}

export default App;
