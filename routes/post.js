import express from "express";
import {
  createPost,
  deletePostById,
  getPostById,
  updatePostById,
} from "../controllers/post.js";

const router = express.Router();

// Create Post
router.post("/new", createPost);

// Get Post By Id
router.get("/:id", getPostById);

// Update Post By Id
router.put("/:id", updatePostById);

// Delete Post By Id
router.delete("/:id", deletePostById);

export default router;
