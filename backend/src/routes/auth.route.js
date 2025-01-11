import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// Define POST routes
router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

// // Optional: Add a GET route for testing
// router.get("/login", (req, res) => {
//   res.send("This is a test GET endpoint for /api/auth/login");
// });

export default router;
