import React, { useState } from 'react';
import { render } from 'react-dom';

import TaskComponent from './Components/TaskComponent';
import { HeaderLayout} from './Components/Layouts';
import TaskEntity from './Entities/TaskEntity.ts';

import './style.scss';
import TaskFormComponent from './Components/TaskFormComponent';

let counter = 0;

function App() {
  const [currentMessage, setMessage] = useState("");
  const [list, addTodo] = useState([]);

  const handleCrossTodo = e => {
    addTodo(list.splice(e.target.value, 1))
  }
  
  const handleTodo = e => {
    if (e.key === 'Enter') {
      counter += 1;
      const todo = new TaskEntity(currentMessage);
      
      addTodo([
        ...list, 
        <TaskComponent 
        key={counter} 
        message={todo.content} 
        publishedAt={todo.publishedAt()}
        priority={todo.priority}
        level={todo.priorityIndex()}
        remove={handleCrossTodo}
        />
      ])
      
      setMessage("");
    }
  }
 
  return (
    <>
      <header>
        <h1>MyAgiList</h1>
      </header>
      <TaskFormComponent   
        handleTodo={handleTodo}
        handleMessage={e => { setMessage(e.target.value) } } 
        currentMessage={currentMessage}
      /> 

      {list}
    </>
  )
}


render(
  <App />,
  document.getElementById('wrapper')
)
