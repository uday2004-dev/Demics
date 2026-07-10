import express from "express";
import adminAuthMiddleware from "../middleware/adminAuthMiddleware.js";

import {
  createInquiry,
  getInquiries,
  getDashboardStats,
  getSingleInquiry,
  convertInquiry,
  deleteInquiry,
} from "../controllers/dashboardController.js";

const router = express.Router();

// Public
router.post("/create", createInquiry);

// Admin
router.get("/", adminAuthMiddleware, getInquiries);
router.get("/stats", adminAuthMiddleware, getDashboardStats);
router.get("/:id", adminAuthMiddleware, getSingleInquiry);
router.put("/convert/:id", adminAuthMiddleware, convertInquiry);
router.delete("/:id", adminAuthMiddleware, deleteInquiry);

export default router;