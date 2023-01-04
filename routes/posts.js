import express from "express";
import { getFeedPosts, getUserPosts, createPost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* CREATE */
router.post("/", verifyToken, createPost);

export default router;
