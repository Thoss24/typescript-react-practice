import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import classes from './App.module.css';
import TodoContextProvider from './store/todos-context';

function App() {

  return (
    <TodoContextProvider>
    <div className={classes.app}>
      <NewTodo />
      <Todos />
    </div>
    </TodoContextProvider>
  );
}

export default App;
