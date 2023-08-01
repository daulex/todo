import { useEffect, useState } from 'react';
import FormNewTodo from './FormNewTodo';
import TodoListItem from './TodoListItem';
import FilterTabs from './FilterTabs';

const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9); // A simple random string generator
};

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [filter, setFilter] = useState('all'); // 'all', 'todo', 'completed'
    const [filterValid, setFilterValid] = useState(true); // Whether the current filter is valid

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
            const newTodoItem = {
                id: generateRandomId(), // Generate a random ID for the new todo
                title: newTodo,
                completed: false
            };
            setTodos([...todos, newTodoItem]);
            setNewTodo('');
        }
    };

    const removeTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        // Check if the current filter is still valid after removing a todo
        setFilterValid(updatedTodos.some((todo) => todo.completed) || updatedTodos.some((todo) => !todo.completed));
    };

    const editTodo = (id, newTitle) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, title: newTitle };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const handleToggleCompleted = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
        // Check if the current filter is still valid after toggling a todo's completion status
        setFilterValid(updatedTodos.some((todo) => todo.completed) || updatedTodos.some((todo) => !todo.completed));
    };

    // Check if there are completed and uncompleted todos
    const hasCompletedTodos = todos.some((todo) => todo.completed);
    const hasUncompletedTodos = todos.some((todo) => !todo.completed);

    // Function to filter todos based on the selected filter
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'todo') {
            return !todo.completed;
        } else if (filter === 'completed') {
            return todo.completed;
        }
        return true; // Show all todos for the 'all' filter
    });

    useEffect(() => {
        // Check if the current filter is still valid when todos change
        setFilterValid(filteredTodos.length > 0 || (filter === 'all' && todos.length > 0));
    }, [filter, todos, filteredTodos.length]);

    useEffect(() => {
        // Reset filter to 'all' if it becomes invalid
        if (!filterValid) {
            setFilter('all');
        }
    }, [filterValid]);

    return (
        <div className="mt-2">
            <FormNewTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
            {hasCompletedTodos && hasUncompletedTodos && (
                <FilterTabs filter={filter} setFilter={setFilter} />
            )}
            <ul className="mt-4">
                {filteredTodos.map((todo) => (
                    <TodoListItem
                        key={todo.id}
                        id={todo.id}
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
