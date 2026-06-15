import express from "express";
import { adminLogin } from "../controllers/adminController.js";
import adminAuthMiddleware from "../middleware/adminAuthMiddleware.js"

const router = express.Router();

router.post("/adminLogin", adminLogin);

export default router;