    import express from "express"
    import adminAuthMiddleware from "../middleware/adminAuthMiddleware.js"
    import { createTeam, deleteTeam, getSingleTeam, getTeam } from "../controllers/teamController.js"
import { upload } from "../middleware/multer.js";

    const router=express.Router()

    // router.post("/createTeam",adminAuthMiddleware,createTeam)
    router.post(
  "/createTeam",
  adminAuthMiddleware,
  upload.single("photo"), // ye key Postman wali key se match honi chahiye
  createTeam
);
    router.get("/",getTeam)
    router.get("/:id",getSingleTeam)
    router.delete("/:id",adminAuthMiddleware,deleteTeam)

    export default router