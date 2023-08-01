const FilterTabs = ({ filter, setFilter }) => (
    <div className="mt-4">
        <button
            className={`mr-2 ${filter === 'all' ? 'font-bold' : ''}`}
            onClick={() => setFilter('all')}
        >
            All
        </button>
        <button
            className={`mr-2 ${filter === 'todo' ? 'font-bold' : ''}`}
            onClick={() => setFilter('todo')}
        >
            Todo
        </button>
        <button
            className={`${filter === 'completed' ? 'font-bold' : ''}`}
            onClick={() => setFilter('completed')}
        >
            Completed
        </button>
    </div>
);
export default FilterTabs;