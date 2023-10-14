class Todo {
    name: string;
    date: string

    constructor(todoName: string) {
        this.name = todoName;
        this.date = new Date().toISOString()
    }
}

export default Todo