import express from "express";
import {
  createPost,
  deletePostById,
  getAllPost,
  getPostById,
  updatePostById,
} from "../controllers/post.js";

const router = express.Router();

// Create Post
router.post("/new", createPost);

// Get All Post
router.get("/",getAllPost)

// Get Post By Id
router.get("/:id", getPostById);

// Update Post By Id
router.put("/:id", updatePostById);

// Delete Post By Id
router.delete("/:id", deletePostById);

export default router;
