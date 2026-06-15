import express from "express"
import adminAuthMiddleware from "../middleware/adminAuthMiddleware.js"
import { createBlog, deleteBlogs, getBlogById, getBlogs } from "../controllers/blogController.js"
import {upload} from "../middleware/multer.js";

const router=express.Router()

router.post("/create",adminAuthMiddleware, upload.single("picture"),createBlog)
router.get("/getAllBlogs",adminAuthMiddleware,getBlogs,)
router.get("/:id",adminAuthMiddleware,getBlogById)
router.delete("/:id",adminAuthMiddleware,deleteBlogs)




// router.post("/create-service", adminAuthMiddleware, createService);
// router.get("/getAllServices",adminAuthMiddleware,getServices)
// router.get("/:id",adminAuthMiddleware,getServiceById)
// router.delete("/:id",adminAuthMiddleware,deleteService)
// router.patch("/:id",adminAuthMiddleware,editServices)
export default router