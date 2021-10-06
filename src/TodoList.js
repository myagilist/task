import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.scss';

function Todo(props) {
  return (
    <div className="todo">
      <p>{props.message}</p>
    </div>
  )
}


export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      currentMessage: null,
    	list: []
    }

    this.cleanCurrentMessage = this.cleanCurrentMessage.bind(this);
    this.handleCurrentMessage = this.handleCurrentMessage.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  cleanCurrentMessage() {
    this.setState({currentMessage: null})
  }

  handleCurrentMessage(e) {
    this.setState({currentMessage: e.target.value})
  }

  addTodo() {
    let {list, currentMessage} = this.state;
    this.setState({list: [...list, <Todo message={currentMessage} />]});

    this.cleanCurrentMessage();
  }
  
  render() {
    let {list} = this.state;

    return (
      <>
        <h1>Todolist</h1>
        <input onChange={this.handleCurrentMessage} /> 
        <button onClick={this.addTodo}>Ajouter une tâche</button>

        {list}
      </>
    )
  }
}

render(
  <TodoList />,
  document.getElementById('wrapper')
)
