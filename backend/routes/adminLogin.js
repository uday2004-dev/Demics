import express from "express";
import { adminLogin, logoutAdmin } from "../controllers/adminController.js";
import adminAuthMiddleware from "../middleware/adminAuthMiddleware.js"

const router = express.Router();

router.post("/adminLogin", adminLogin);
router.post("/adminLogout",logoutAdmin)

export default router;