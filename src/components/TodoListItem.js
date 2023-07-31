import React, { useState, useRef, useEffect } from 'react';

const TodoListItem = ({ index, todo, removeTodo, editTodo, toggleCompleted }) => {
    const { title, completed } = todo;
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleCheckboxChange = () => {
        toggleCompleted(index);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        setEditedTitle(e.target.value);
    };

    const handleInputBlur = () => {
        saveEditedTodo();
    };

    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            saveEditedTodo();
        }
    };

    const saveEditedTodo = () => {
        if (editedTitle.trim() !== '') {
            editTodo(index, editedTitle);
            setIsEditing(false);
        }
    };

    return (
        <li className={`flex items-center bg-gray-100 px-4 py-2 mb-2 rounded ${completed ? 'opacity-50' : ''}`}>
            <input type="checkbox" checked={completed} onChange={handleCheckboxChange} />
            <div className="flex flex-1">
                {isEditing ? (
                    <input
                        ref={inputRef}
                        type="text"
                        value={editedTitle}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        onKeyDown={handleInputKeyPress}
                        className="flex-1 ml-2"
                    />
                ) : (
                    <span className={`ml-2 ${completed ? 'line-through' : ''}`}>{title}</span>
                )}
            </div>
            <button
                className="ml-2 text-xs"
                onClick={handleEditClick}
                title="Edit"
            >
                edit
            </button>
            <button
                className="ml-2 text-xs font-medium text-red-800"
                onClick={() => removeTodo(index)}
                title="Remove"
            >
                x
            </button>
        </li>
    );
};

export default TodoListItem;
