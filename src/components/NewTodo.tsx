import { useRef } from "react";
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{ addTodo: (text: string) => void}> = (props) => {

    const nameInputText = useRef<HTMLInputElement>(null);

    const addTodoHandler = (event: React.FormEvent) => {
        event.preventDefault();
        props.addTodo(nameInputText.current!.value)
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