import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { client } from './client';

import TaskComponent from './Components/TaskComponent';
import { HeaderLayout} from './Components/Layouts';
import TaskEntity from './Entities/TaskEntity.ts';

import './style.scss';
import TaskFormComponent from './Components/TaskFormComponent';

let counter = 0;

function App() {
  const [currentMessage, setMessage] = useState("");
  const [list, addTodo] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
    client.auth.onAuthStateChange(() => { 
      checkUser();
    });
  }, []);
  
  const checkUser = () => {
    const u = client.auth.user();
    setUser(u);
  }
  
  const signInWithGithub = () => {
    client.auth.signIn({ provider: 'github' }); 
  }
  
  const signOut = () => {
    client.auth.signOut();
    setUser(null);
  }
  
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
  
  if(user) {
    console.log(user)
    return (
      <>
        <HeaderLayout user={user} />
        <TaskFormComponent   
          handleTodo={handleTodo}
          handleMessage={e => { setMessage(e.target.value) } } 
          currentMessage={currentMessage}
        /> 

        {list}

        <button onClick={signOut}>Sign out..</button>
      </>
    )
  } else {
    return (
      <>
        <h1>Welcome to your favorite Todolist !</h1>
        <a onClick={signInWithGithub} className="btn">
          <i className="fa fa-github"></i> Sign in with Github
        </a>
      </>
    );
  }

}


render(
  <App />,
  document.getElementById('wrapper')
)
