import { useEffect, useState } from 'react';
import FormNewTodo from './FormNewTodo';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="mt-2">
        <FormNewTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
        <ul className="mt-4">
            {todos.map((todo, index) => (
                <TodoListItem 
                    key={index} 
                    index={index} 
                    todo={todo} 
                    removeTodo={removeTodo} 
                    />
        ))}
        </ul>
  </div>
  );
};

export default TodoList;
