import express from "express";
import {
  createProject,
  getProjects,
  getProjectById,
} from "../controllers/project.Controller.js";

import { upload } from "../middleware/multer.js"
import adminAuthMiddleware from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

router.post(
  "/create",
  adminAuthMiddleware,
  upload.single("photo"),
  createProject
);
router.get("/", getProjects);
router.get("/:id", getProjectById);

export default router;