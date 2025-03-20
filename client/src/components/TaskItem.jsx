import { FaTrash, FaCheck } from "react-icons/fa";

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className="mb-3 flex justify-between items-center bg-gray-800 text-white p-3 rounded-lg shadow-md transition hover:scale-105">
      <span className={`text-lg ${task.completed ? "line-through text-green-400" : ""}`}>
        {task.title}
      </span>
      <div className="flex gap-3">
        <button onClick={() => onToggle(task._id)} className="p-2 bg-green-600 rounded hover:bg-green-800">
          <FaCheck />
        </button>
        <button onClick={() => onDelete(task._id)} className="p-2 bg-red-600 rounded hover:bg-red-800">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
