import axios from "axios";

const API_BASE_URL="https://task-manager-fcev.onrender.com"; 

export const getTasks = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/tasks`);
  return response.data;
};

export const addTask = async (title) => {
  await axios.post(`${API_BASE_URL}/api/tasks`, { title });
};

export const toggleTask = async (taskId) => {
  await axios.put(`${API_BASE_URL}/api/tasks/${taskId}`);
};

export const deleteTask = async (taskId) => {
  await axios.delete(`${API_BASE_URL}/api/tasks/${taskId}`);
};
