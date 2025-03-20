import { useState } from "react";
import { addTask } from "../services/api";

const AddTask = ({ refreshTasks }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await addTask(title);
    setTitle("");
    refreshTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mt-5">
      <input
        type="text"
        className="w-full p-2 rounded-lg border border-gray-500 bg-gray-900 text-white"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800">
        Add
      </button>
    </form>
  );
};

export default AddTask;
