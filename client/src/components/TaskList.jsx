import TaskItem from "./TaskItem";

const TaskList = ({ tasks, refreshTasks }) => {
  const handleToggle = async (taskId) => {
    try {
        console.log("id is ", taskId);
        const response = await axios.put(`${API_BASE_URL}/api/tasks/${taskId}`);
      refreshTasks();
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/tasks/${taskId}`);

      if (!response.ok) throw new Error("Failed to delete task");
      
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
