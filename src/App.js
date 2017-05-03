import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Adding Data Model Componet #1 (initial componenet state)

const todos =[

  {
    todoTitle: "My First todo",
    todoAuthor: "Marat",
    todoDescription: "Topping toffee lollipop caramels jujubes. Gummies jelly-o jelly-o jelly carrot cake caramels. Dessert cheesecake tart. Jelly jujubes cookie.",
    todoPriority: "low"
  },
  {
    todoTitle: "My Second todo",
    todoAuthor: "Maratsito",
    todoDescription: "Jelly sweet roll cookie. Carrot cake tart bear claw marshmallow cotton candy. Chocolate tiramisu powder halvah marzipan",
    todoPriority: "medium"
  },
  {
    todoTitle: "My Third todo",
    todoAuthor: "Maratski",
    todoDescription: "Sweet pie fruitcake caramels dessert danish liquorice cookie. Muffin jelly beans marshmallow liquorice. Gingerbread jujubes tootsie roll tiramisu.",
    todoPriority: "high"
  },
]
// End of Data Model

// Adding app component which shows todo items and Delete button
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
    // binding AddTodo

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  // event which removes one of the todo items, we will added it to the button as onClick event
  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function(e,i) {
        return i !==index;
      })
    })
  }

  handleAddTodo(todo) {
    this.setState({todos: [...this.state.todos, todo]});
  }
// Adding html code as JSX, attaching classes to the elements
  render() {
    return (
      <div className="container">
        <TodoInput
          onAddTodo={this.handleAddTodo}
          />
        <hr />
        <h4>
          Todo Count: <span className="badge">{this.state.todos.length}</span>
        </h4>
        <ul className="list-group">
          {this.state.todos.map((todo,index) =>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.todoTitle}
                <small>
                  <span className="label label-info">{todo.todoPriority}</span>
                </small>
              </h4>
              <p><span className="glyphicon glyphicon-user"></span>{todo.todoAuthor}</p>
              <p>{todo.todoDescription}</p>
            <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><span className="glyphicon glyphicon-trash"></span>Delete</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}



// Adding input component to App (to render new JSX you need to add <TodoInput></TodoInput>)

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state={
      todoTitle:"",
      todoAuthor:"",
      todoDescription:"",
      todoPriority:"lowest"
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]:value
    })
  }

  // Submitting handling event
  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
                    todoTitle:"",
                    todoAuthor:"",
                    todoDescription:"",
                    todoPriority:"Lowest"
    });
  }


  render() {
    return (
      <div>
        <h4>Add New Todo</h4>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputTodoTitle" className="col-sm-2 control-panel">Todo</label>
            <div className="col-sm-10">
              <input  name="todoTitle"
                      type="text"
                      className="form-control"
                      id="inputTodoTitle"
                      value={this.state.todoTitle}
                      onChange={this.handleInputChange}
                      placeholder="Title"></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputTodoAuthor" className="col-sm-2 control-panel">Author</label>
            <div className="col-sm-10">
              <input  name="todoAuthor"
                      type="text"
                      className="form-control"
                      id="inputTodoAuthor"
                      value={this.state.todoAuthor}
                      onChange={this.handleInputChange}
                      placeholder="Author"></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputTodoDesc" className="col-sm-2 control-panel">Description</label>
            <div className="col-sm-10">
              <textarea  name="todoDescription"
                        rows="3"
                        className="form-control"
                        id="inputTodoDesc"
                        value={this.state.todoDescription}
                        onChange={this.handleInputChange}></textarea>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputTodoPriority" className="col-sm-2 control-panel">Priority</label>
            <div className="col-sm-10">
              <select  name="todoPriority"
                      className="form-control"
                      id="inputTodoPriority"
                      value={this.state.todoPriority}
                      onChange={this.handleInputChange}>
                <option>Lowest</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Highest</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-2 col-sm-10">
              <button type="submit" className="btn btn-success">Add todo</button>
            </div>
          </div>
        </form>
      </div>
    )
  }



}









export default App;
