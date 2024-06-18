import TodoItem from './TodoItem';

function TodoList({ todos, removeTodo, editTodo, toggleComplete }) {
  return (
    <ul className="mt-4">
      {todos.map((todo, index) => (
        <TodoItem key={index} index={index} todo={todo} removeTodo={removeTodo} editTodo={editTodo} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
}

export default TodoList;
