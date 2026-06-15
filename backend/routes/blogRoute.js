import express from "express"
import adminAuthMiddleware from "../middleware/adminAuthMiddleware.js"
import { createBlog } from "../controllers/blogController.js"
import {upload} from "../middleware/multer.js";

const router=express.Router()

router.post("/create",adminAuthMiddleware, upload.single("picture"),createBlog)


export default router