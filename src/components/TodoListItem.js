import React from 'react';

const TodoListItem = ({ index, todo, removeTodo, toggleCompleted     }) => {

  const handleCheckboxChange = () => {
    toggleCompleted(index);
  };

  return (
    <li className={`flex items-center bg-gray-100 px-4 py-2 mb-2 rounded ${todo.completed ? 'opacity-50' : ''}`}>
      <input type="checkbox" checked={todo.completed} onChange={handleCheckboxChange} />
      <span className={`ml-2 ${todo.completed ? 'line-through' : ''}`}>{todo.title}</span>
      <button
        className="text-red-600 flex-end ml-auto"
        onClick={() => removeTodo(index)}
      >
        remove
      </button>
    </li>
  );
};

export default TodoListItem;
