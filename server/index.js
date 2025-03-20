import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./connect.js";
import taskRoutes from "./routes/taskroutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); 

app.use("/api", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
