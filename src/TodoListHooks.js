import React, { useState } from 'react';
import { render } from 'react-dom';

import './style.scss';

function Todo(props) {
  return (
    <div className="todo">
      <p>{props.message}</p>
    </div>
  )
}

function TodoList() {
  const [currentMessage, setMessage] = useState(null);
  const [list, addTodo] = useState([]);

  const handleMessage = e => {
    setMessage(e.target.value);
  }

  const handleTodo = () => {
    addTodo([...list, <Todo message={currentMessage} />])
  }

  return (
    <div>
      <h1>Todolist</h1>
      <input onChange={handleMessage} value={currentMessage}/> 
      <button onClick={handleTodo}>Ajouter une tâche</button>

      {list}
    </div>
  )
}

render(
  <TodoList />,
  document.getElementById('wrapper')
)
