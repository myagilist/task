import React, { useState } from 'react';
import { render } from 'react-dom';

import './style.scss';

let counter = 0;
const levels = ['lowest', 'low', 'medium', 'high'];

function usePriority(current) {
  const [level, setLevel] = useState(current);

  const modifyLevel = () => setLevel(l => { 
    if (l < (levels.length - 1)) { 
      return l + 1 
    } else { 
      return 0 
    }
  }) 
    
  return [level, modifyLevel];
}

function Task(props) {
  const [currentPriority, changePriority] = usePriority(0);

  return (
    <div key={props.counter} className="todo" onClick={changePriority}>
      <p>{props.message}</p>
      <span className={`badge badge-${levels[currentPriority]}`}>{levels[currentPriority]}</span>
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
    addTodo([...list, <Task key={counter} message={currentMessage} />])
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
