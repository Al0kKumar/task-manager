import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks"; // Change this if backend is deployed

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTask = async (title) => {
  await axios.post(API_URL, { title });
};

export const updateTask = async (id) => {
  await axios.put(`${API_URL}/${id}`);
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
