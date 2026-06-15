import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import adminLogin from "./routes/adminLogin.js";
import { createProject } from "./controllers/project.Controller.js";
import projectRoutes from "./routes/projectRoute.js"
import serviceRoute from "./routes/serviceRoute.js";
import blogRoute from "./routes/blogRoute.js"

dotenv.config();

const app = express();
console.log("API KEY =>", process.env.CLOUDINARY_API_KEY);
connectDB();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/admin", adminLogin);
app.use("/api/projects", projectRoutes);
app.use("/api/services",serviceRoute)
app.use("/api/blog",blogRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});