const FormNewTodo = ({ setNewTodo, addTodo, newTodo }) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          addTodo();
        }
    };
    
    return (
        <div className="mt-2 flex">
            <input
                className="w-full mb-2 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 h-10"
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter a new todo"
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded ml-2 h-10"
                onClick={addTodo}
            >
                Add
            </button>
    </div>
    )
};
export default FormNewTodo;