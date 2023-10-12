import Todos from './components/Todos';
import Todo from './models/Todo';

function App() {

  const items = [
    new Todo('Learning React'),
    new Todo('Learning TypeScript')
  ];

  return (
    <div>
      <Todos items={items}/>
    </div>
  );
}

export default App;
