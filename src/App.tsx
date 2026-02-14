import { useTodos } from './hooks/useTodos';
import { TodoForm } from './components/TodoForm';
import { TodoFilter } from './components/TodoFilter';
import { TodoList } from './components/TodoList';
import './App.css';

function App() {
  const { todos, filter, setFilter, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="app">
      <h1>TODO</h1>
      <TodoForm onAdd={addTodo} />
      <TodoFilter current={filter} onChange={setFilter} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
