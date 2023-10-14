import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {

    const nameInputText = useRef<HTMLInputElement>(null);

    const addNewTodo = (event: React.FormEvent) => {
        event.preventDefault()
        const name = nameInputText.current!.value 
        
        if (name.trim().length === 0) {
            return
        };

        props.onAddTodo(name)
    };

    return (
        <form action="" onSubmit={addNewTodo}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={nameInputText}/>
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

export default NewTodo