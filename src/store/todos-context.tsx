import Todo from "../models/Todo"
import React, { useState } from "react"

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (text: string) => void
};

type Props = {
  children?: React.ReactNode
}

export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {}
});

const TodoContextProvider = ({ children }: Props) => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const todo = new Todo(text)
    setTodos((prev) => {
      return prev.concat(todo)
    })
  };

  const removeTodo = (text: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.name !== text)
    })
  };

  const contextValue = {
    items: todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
  }

  return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>
};

export default TodoContextProvider