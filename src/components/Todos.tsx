import Todo from "../models/Todo"
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[]}> = (props) => {

   return (
    <ul>
        {props.items.map(item => (
            <TodoItem todo={item} key={item.id}/>
        ))}
    </ul>
   )
}

export default Todos