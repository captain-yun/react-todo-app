import { useState } from 'react';
import { FiEdit2, FiTrash2, FiCheck } from 'react-icons/fi';

function TodoItem({ todo, index, removeTodo, editTodo, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editValue.trim()) {
      editTodo(index, editValue);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex justify-between items-center bg-gray-100 p-4 my-2 rounded-lg shadow-md">
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="focus:ring-0 border-none outline-none p-2 flex-grow bg-gray-100"
        />
      ) : (
        <span className={`flex-grow ${todo.completed ? 'line-through text-gray-400' : ''}`} onClick={() => toggleComplete(index)}>
          {todo.text}
        </span>
      )}
      <div className="flex space-x-2">
        <button onClick={handleEdit} className={`p-2 rounded-full shadow-md transition duration-300 ${isEditing ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-orange-400 hover:bg-orange-400 text-white'}`}>
          {isEditing ? <FiCheck /> : <FiEdit2 />}
        </button>
        <button onClick={() => removeTodo(index)} className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition duration-300">
          <FiTrash2 />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
