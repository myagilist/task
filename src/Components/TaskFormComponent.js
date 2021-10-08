import React from 'react';

export default function TaskFormComponent(props) {
  return (
    <>
      <textarea 
        onKeyPress={props.handleTodo}
        onChange={props.handleMessage} 
        value={props.currentMessage}
      /> 
    </>
  )
};