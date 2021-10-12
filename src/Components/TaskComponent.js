import React from 'react';
import TaskEntity from "../Entities/TaskEntity";
import { useLevel } from "../hooks";

export default function TaskComponent(props) {
  const [currentPriority, changePriority] = useLevel(props.level);
  const [currentDifficulty, changeDifficulty] = useLevel(0);

  return (
    <div key={props.counter} className="panel panel-todo" >
      <span className="cross" onClick={props.remove}>x</span>
      <span>Task published on {props.publishedAt}</span>
      <p>{props.message}</p>
      <div>
        <span onClick={changePriority} className={`badge badge-${TaskEntity.levels[currentPriority]}`}>Priority : {TaskEntity.levels[currentPriority]}</span>
      </div>
    </div>
  )
};