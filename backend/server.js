import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import adminLogin from "./routes/adminLogin.js";
import projectRoutes from "./routes/projectRoute.js"
import serviceRoute from "./routes/serviceRoute.js";
import testimonialRoute from "./routes/testimonialRoute.js"
import blogRoute from "./routes/blogRoute.js"
import teamRoute from "./routes/teamRoute.js"
import inqueryRoute from "./routes/inqueryRoute.js"

import cors from "cors";

dotenv.config();

const app = express();
console.log("API KEY =>", process.env.CLOUDINARY_API_KEY);
connectDB();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "http://localhost:5174",
//       "https://demics-admin.vercel.app",
//     ],
//     credentials: true,
//   })
// );


app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://frontend-seven-rose-54.vercel.app",
    ],
    credentials: true,
  })
);


app.use("/api/admin", adminLogin);
app.use("/api/projects", projectRoutes);
app.use("/api/services",serviceRoute)
app.use("/api/blog",blogRoute)
app.use("/api/testimonial",testimonialRoute)
app.use("/api/team",teamRoute)
app.use("/api/inquery",inqueryRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});