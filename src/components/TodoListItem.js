const TodoListItem = ({ index,todo,removeTodo }) => {
    return(
        <li
          className="flex items-center justify-between bg-gray-100 px-4 py-2 mb-2 rounded"
        >
          <span>{todo}</span>
          <button
            className="text-red-600"
            onClick={() => removeTodo(index)}
          >
            Remove
          </button>
        </li>
    )
};
export default TodoListItem;