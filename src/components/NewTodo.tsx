import { useRef } from "react";
import classes from './NewTodo.module.css';
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {

    const ctx = useContext(TodosContext);

    const nameInputText = useRef<HTMLInputElement>(null);

    const addTodoHandler = (event: React.FormEvent) => {
        event.preventDefault();
        ctx.addTodo(nameInputText.current!.value)
    };

    return (
        <form className={classes.form} onSubmit={addTodoHandler}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={nameInputText}/>
            </div>
            <button type="submit">Add</button>
        </form>
    )
};

export default NewTodo