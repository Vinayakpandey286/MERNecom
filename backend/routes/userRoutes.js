import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getuserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getuserProfile)
  .put(protect, updateUserProfile);

export default router;
