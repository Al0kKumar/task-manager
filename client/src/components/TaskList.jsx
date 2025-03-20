import TaskItem from "./TaskItem";

const TaskList = ({ tasks, refreshTasks }) => {
  return (
    <div className="mt-5 w-full max-w-md">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem key={task._id} task={task} refreshTasks={refreshTasks} />
        ))
      ) : (
        <p className="text-gray-400 text-center">No tasks yet! Add one above.</p>
      )}
    </div>
  );
};

export default TaskList;
