import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[], removeTodo: (text: string) => void}> = (props) => { 

   return (
    <div className={classes.todolist}>
        {props.items.map(item => (
           <TodoItem todo={item} removeTodo={props.removeTodo.bind(null, item.name)} key={item.date}/>
        ))}
    </div>
  
   )
}

export default Todos