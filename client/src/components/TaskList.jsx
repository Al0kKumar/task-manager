import TaskItem from "./TaskItem";

const TaskList = ({ tasks, refreshTasks }) => {
  const handleToggle = async (taskId) => {
    try {
        console.log("id is ", taskId);
      await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
        method: "PUT",
      });
      refreshTasks();
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
        method: "DELETE",
      });

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
