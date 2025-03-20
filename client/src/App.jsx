import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import { getTasks } from "./services/api";  // Import API function

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend
  const refreshTasks = async () => {
    try {
      const data = await getTasks();
      console.log("Fetched tasks:", data);
      setTasks(data);  // Update state
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    refreshTasks();  // Fetch tasks on mount
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold mt-5">Task Manager ✅</h1>
      <AddTask refreshTasks={refreshTasks} />
      <TaskList tasks={tasks} refreshTasks={refreshTasks} />
    </div>
  );
};

export default App;
