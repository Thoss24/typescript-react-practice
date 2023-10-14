import React from "react";
import Todo from "../models/Todo";

const TodoItem: React.FC<{ todo: Todo }> = (props) => {
    return <li>{props.todo.name}</li>
};

export default TodoItem