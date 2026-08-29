import express from "express";
import { upload } from "../middleware/multer.js";
import { createService, deleteService, getServiceById, getServices,editServices, getServiceDetails } from "../controllers/servicesController.js";
import adminAuthMiddleware from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

router.post(
  "/create-service",
  adminAuthMiddleware,
  upload.single("photo"),
  createService
);

router.get("/getAllServices", getServices);

router.get("/:id/details", getServiceDetails);

router.get("/:id", getServiceById);

router.delete(
  "/:id",
  adminAuthMiddleware,
  deleteService
);

// router.patch(
//   "/:id",
//   adminAuthMiddleware,
//   upload.single("photo"),
//   editServices
// );

router.patch(
  "/:id",
  adminAuthMiddleware,
  upload.single("photo"),
  editServices
);

export default router;


// router.post(
//   "/create-service",
//   adminAuthMiddleware,
//   upload.single("photo"),
//   createService
// );

// router.get("/getAllServices", getServices);

// router.get("/:id/details", getServiceDetails);

// router.get("/:id", getServiceById);

// router.delete(
//   "/:id",
//   adminAuthMiddleware,
//   deleteService
// );

// router.patch(
//   "/:id",
//   adminAuthMiddleware,
//   upload.single("photo"),
//   editServices
// );
