import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getuserProfile,
  updateUserProfile,
  getusers,
  deleteUsers,
  getuserById,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, admin, getusers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getuserProfile)
  .put(protect, updateUserProfile);

router
  .route("/:id")
  .delete(protect, admin, deleteUsers)
  .get(protect, admin, getuserById)
  .put(protect, admin, updateUser);

export default router;
