import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';
import { TodosContext } from "../store/todos-context";
import { useContext } from "react";

const Todos: React.FC = () => { 

   const ctx = useContext(TodosContext);

   return (
    <div className={classes.todolist}>
        {ctx.items.map(item => (
           <TodoItem todo={item} removeTodo={ctx.removeTodo.bind(null, item.name)} key={item.date}/>
        ))}
    </div>
  
   )
}

export default Todos