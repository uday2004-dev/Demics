import express from "express";
import { createService, deleteService, getServiceById, getServices,editServices } from "../controllers/servicesController.js";
import adminAuthMiddleware from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

router.post("/create-service", adminAuthMiddleware, createService);
router.get("/getAllServices",adminAuthMiddleware,getServices)
router.get("/:id",adminAuthMiddleware,getServiceById)
router.delete("/:id",adminAuthMiddleware,deleteService)
router.patch("/:id",adminAuthMiddleware,editServices)

export default router;