import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks"; 

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTask = async (title) => {
  await axios.post(API_URL, { title });
};


