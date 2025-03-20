const TaskItem = ({ task, onToggle, onDelete }) => {

    return (
     <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
        
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={onToggle} 
            className="w-5 h-5 cursor-pointer accent-green-500"
          />
          <span className={`${task.completed ? "line-through text-gray-500" : ""}`}>
            {task.title}
          </span>
        </div>

        <button
          onClick={onDelete} 
          className="ml-3 p-1  text-white rounded-lg hover: cursor-pointer"
        >
          ❌
        </button>
      </div>
    );
  };
  
  export default TaskItem;
  
  