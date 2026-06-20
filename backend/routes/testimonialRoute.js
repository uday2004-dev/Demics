import express from "express"
import adminAuthMiddleware from "../middleware/adminAuthMiddleware.js"
import { createTestimonial, getTestimonial } from "../controllers/testimonial.js"

const router=express.Router()

router.post("/createTestimonial",adminAuthMiddleware,createTestimonial)
router.get("/allTestimonial",adminAuthMiddleware,getTestimonial)
export default router