import express from "express";
import {
  signup,
  login,
  logout,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Define POST routes
router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.post("/updateProfile", protectRoute, updateProfile);

// // Optional: Add a GET route for testing
// router.get("/login", (req, res) => {
//   res.send("This is a test GET endpoint for /api/auth/login");
// });

export default router;
