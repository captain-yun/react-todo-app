import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { FiClipboard } from 'react-icons/fi';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, completed: false }]);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index, newTodo) => {
    const newTodos = todos.map((todo, i) => (i === index ? { ...todo, text: newTodo } : todo));
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo));
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          {/* <FiClipboard className="text-blue-600" size={30} /> */}
          <h1 className="text-4xl font-bold text-black-600 ml-2">Todo list</h1>
        </div>
        <TodoInput addTodo={addTodo}/>
        <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} toggleComplete={toggleComplete} />
      </div>
    </div>
  );
}

export default App;
