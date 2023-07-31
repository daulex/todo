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
            setTodos([...todos, {
                title: newTodo,
                completed: false
            }]);
            setNewTodo('');
        }
    };

    const removeTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const editTodo = (index, newTitle) => {
        const updatedTodos = [...todos];
        updatedTodos[index].title = newTitle;
        setTodos(updatedTodos);
    };

    const handleToggleCompleted = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    return (
        <div className="mt-2">
            <FormNewTodo 
                newTodo={newTodo} 
                setNewTodo={setNewTodo} 
                addTodo={addTodo}
            />
            <ul className="mt-4">
                {todos.map((todo, index) => (
                    <TodoListItem
                        key={`todo-${index}`}
                        index={index}
                        todo={todo}
                        removeTodo={removeTodo}
                        editTodo={editTodo}
                        toggleCompleted={handleToggleCompleted}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
