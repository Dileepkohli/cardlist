import React from 'react';
import { BiEdit  } from "react-icons/bi";
import { RiDeleteBinLine } from 'react-icons/ri';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  handleChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { todos, newTodo } = this.state;
    if (newTodo.trim() !== '') {
      const updatedTodos = [...todos, newTodo];
      this.setState({ todos: updatedTodos, newTodo: '' });
    }
  };

  handleEdit = (index) => {
    const { todos } = this.state;
    const updatedTodo = prompt('Update the TODO', todos[index]);
    if (updatedTodo !== null) {
      todos[index] = updatedTodo;
      this.setState({ todos });
    }
  };

  handleDelete = (index) => {
    const { todos } = this.state;
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos, newTodo } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={newTodo} onChange={this.handleChange} />
          <button type="submit">Add</button>
        </form>
        <br/>
          {todos.map((todo, index) => (
            <div  key={index} >
              {todo}<br/>
              <button onClick={() => this.handleEdit(index)}>Edit</button>
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </div>
          ))}
        
      </div>
    );
  }
}

export default TodoList;
