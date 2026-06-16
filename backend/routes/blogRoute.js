import express from "express"
import adminAuthMiddleware from "../middleware/adminAuthMiddleware.js"
import { createBlog, deleteBlogs, editBlogs, getBlogById, getBlogs } from "../controllers/blogController.js"
import {upload} from "../middleware/multer.js";

const router=express.Router()

router.post("/create",adminAuthMiddleware, upload.single("picture"),createBlog)
router.get("/getAllBlogs",adminAuthMiddleware,getBlogs,)
router.get("/:id",adminAuthMiddleware,getBlogById)
router.delete("/:id",adminAuthMiddleware,deleteBlogs)
router.patch("/:id",adminAuthMiddleware,editBlogs)





export default router