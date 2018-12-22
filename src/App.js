import React, { Component } from "react";
import "./templates/App.css";
import SingleTodo from "./components/login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    };
  }

  onInputeChange = e => {
    this.setState({ currentTodo: e.target.value });
  };

  onClick = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);

    this.setState({ todos: todosCopy, currentTodo: "" });
  };

  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);

    this.setState({ todos: todosCopy });
  };

  render() {
    let bulletedTodos = this.state.todos.map((e, i) => {
      return <SingleTodo todo={e} delete={() => this.deleteTodo(i)} />;
    });
    return (
      <div>
        <input
          placeholder="Enter todo"
          value={this.state.currentTodo}
          onChange={this.onInputeChange}
        />

        <button onClick={this.onClick}>Add!</button>

        {this.state.todos.length === 0 ? (
          "No todos yet!"
        ) : (
          <ul>{bulletedTodos}</ul>
        )}
      </div>
    );
  }
}

export default App;
