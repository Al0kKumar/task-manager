import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import { getTasks } from "./services/api"; // Import API function
import { gsap } from "gsap";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend
  const refreshTasks = async () => {
    try {
      const data = await getTasks();
      console.log("Fetched tasks:", data);
      setTasks(data); // Update state
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    refreshTasks(); // Fetch tasks on mount

    // Animate Header
    gsap.fromTo(
      ".header",
      { opacity: 0, y: -50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
    );

    // Animate Input & Button
    gsap.fromTo(
      ".input-section",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );

    // Animate Task List
    gsap.fromTo(
      ".task-list",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center p-5">
      {/* HEADER SECTION */}
      <h1 className="header text-4xl font-bold mt-5 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Task Manager 
      </h1>

      {/* INPUT SECTION */}
      <div className="input-section w-full max-w-md mt-5">
        <AddTask refreshTasks={refreshTasks} />
      </div>

      {/* TASK LIST */}
      <div className="task-list w-full max-w-md mt-5">
        <TaskList tasks={tasks} refreshTasks={refreshTasks} />
      </div>
    </div>
  );
};

export default App;
