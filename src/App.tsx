import Todos from './components/Todos';
import Todo from './models/Todo';
import NewTodo from './components/NewTodo';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]); 

  const addTodo = (text: string) => {
    const todo = new Todo(text);
    
    setTodos((prevState) => {
      return prevState.concat(todo)
    });
    
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodo}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
