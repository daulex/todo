const FormNewTodo = ({ setNewTodo, addTodo, newTodo }) => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    return (
        <div className="mt-2 flex">
            <label htmlFor="newTodo" className="sr-only">
                Enter a new todo
            </label>
            <input
                className="w-full drop-shadow-md mb-2 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 h-10"
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter a new todo"
            />
            <button
                type="button"
                className="bg-blue-500 drop-shadow-md text-white px-4 py-2 rounded ml-2 h-10"
                onClick={addTodo}
            >
                Add
            </button>
        </div>
    )
};
export default FormNewTodo;