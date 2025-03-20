import axios from "axios";

const API_URL = "https://task-manager-fcev.onrender.com"; 

export const getTasks = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/tasks`);
  return response.data;
};

export const addTask = async (title) => {
  await axios.post(`${API_BASE_URL}/api/tasks`, { title });

};


export default API_URL

