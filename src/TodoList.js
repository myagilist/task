import React, { useState } from 'react';
import { render } from 'react-dom';

import Todo from './Todo.ts';

import './style.scss';

let counter = 0;

function usePriority(current) {
  const [level, setLevel] = useState(current);

  const modifyLevel = () => setLevel(l => { 
    if (l < (Todo.priorities.length - 1)) { 
      return l + 1 
    } else { 
      return 0 
    }
  }) 
    
  return [level, modifyLevel];
}

function Task(props) {
  const [currentPriority, changePriority] = usePriority(props.level);

  return (
    <div key={props.counter} className="todo" onClick={changePriority}>
      <p>{props.message}</p>
      <span>Publié le {props.publishedAt}</span>
      <br/>
      <span className={`badge badge-${Todo.priorities[currentPriority]}`}>{Todo.priorities[currentPriority]}</span>
    </div>
  )
}

function TodoList() {
  const [currentMessage, setMessage] = useState('');
  const [list, addTodo] = useState([]);

  const handleMessage = e => {
    setMessage(e.target.value);
  }

  const handleTodo = () => {
    counter += 1;
    const todo = new Todo(currentMessage);

    addTodo([
      ...list, 
      <Task 
        key={counter} 
        message={todo.content} 
        publishedAt={todo.publishedAt()}
        priority={todo.priority}
        level={todo.priorityIndex()}
      />])
  }

  return (
    <div>
      <h1>Todolist</h1>
      <input 
        onChange={handleMessage} 
        value={currentMessage}
      /> 
      <button onClick={handleTodo}>Ajouter une tâche</button>

      {list}
    </div>
  )
}

render(
  <TodoList />,
  document.getElementById('wrapper')
)
