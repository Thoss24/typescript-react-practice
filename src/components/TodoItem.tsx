import React from "react";
import Todo from "../models/Todo";
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{ todo: Todo, removeTodo: () => void}> = (props) => {

  return (
    <div className={classes.todoitem}>
      <h1>{props.todo.name}</h1>
      <button onClick={props.removeTodo}>delete</button>
    </div>
  );
};

export default TodoItem;
