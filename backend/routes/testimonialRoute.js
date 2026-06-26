import express from "express"
import adminAuthMiddleware from "../middleware/adminAuthMiddleware.js"
import { createTestimonial, getTestimonial, getTestimonialById } from "../controllers/testimonial.js"

const router=express.Router()

router.post("/createTestimonial",adminAuthMiddleware,createTestimonial)
router.get("/allTestimonial",getTestimonial)
router.get("/:id",getTestimonialById)
export default router