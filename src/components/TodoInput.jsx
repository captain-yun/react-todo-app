import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-4 bg-green-100 p-2 rounded-lg shadow-md mb-6">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="focus:ring-0 border-none outline-none p-2 flex-grow bg-green-100"
        placeholder="Add your items"
      />
      <button type="submit" className="bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-600 transition duration-300">
        <FiPlus size={20} />
      </button>
    </form>
  );
}

export default TodoInput;
