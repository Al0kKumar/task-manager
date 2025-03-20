import TaskItem from "./TaskItem";
import { toggleTask, deleteTask } from "../services/api";

const TaskList = ({ tasks, refreshTasks }) => {
  const handleToggle = async (taskId) => {
    try {
        console.log("id is ", taskId);
        await toggleTask(taskId); 
      refreshTasks();
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
        await deleteTask(taskId);
      refreshTasks(); 
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onToggle={() => handleToggle(task._id)}
          onDelete={() => handleDelete(task._id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
