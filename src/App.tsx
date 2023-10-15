import Todos from './components/Todos';
import Todo from './models/Todo';
import NewTodo from './components/NewTodo';
import { useState } from 'react';
import classes from './App.module.css'

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const todo = new Todo(text);
    setTodos((prev) => {
      return prev.concat(todo)
    });
  }

  const removeTodo = (text: string) => {
  
    setTodos((prev) => {
      return prev.filter((todo) => todo.name !== text)
    })
  };

  return (
    <div className={classes.app}>
      <NewTodo addTodo={addTodo}/>
      <Todos items={todos} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
