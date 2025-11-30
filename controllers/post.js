import mongoose from "mongoose";
import { Post } from "../models/Post.js";

// Create Post
export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!req.body) {
      return res.status(400).json({
        message: "Request body required",
        success: false,
      });
    }

    if (!title || !content) {
      return res.status(400).json({
        message: "Please fill all fields",
        success: false,
      });
    }
    const post = new Post({ title, content });
    await post.save();

    if (!post) {
      return res.status(400).json({
        message: "Post not created",
        success: false,
      });
    }
    if (post) {
      return res.status(201).json({
        message: "Post created successfully",
        success: true,
        data: post,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

// Get Post By Id
export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid post Id format",
        success: false,
      });
    }
    const post = await Post.findById({ _id: id });
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
        success: false,
      });
    }
    if (post) {
      return res.status(200).json({
        message: "Post retrieved successfully",
        success: true,
        data: post,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

// Update Post By Id
export const updatePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!req.body) {
      return res.status(400).json({
        message: "Request body required",
        success: false,
      });
    }
    if (!title || !content) {
      return res.status(400).json({
        message: "Please fill all fields",
        success: false,
      });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid post ID format",
        success: false,
      });
    }
    const post = await Post.findByIdAndUpdate(
      id,
      { title: title, content: content },
      { new: true }
    );
    if (!post) {
      return res.status(400).json({
        message: "Post not found",
        success: false,
      });
    }
    if (post) {
      return res.status(200).json({
        message: "Post updated successfully.",
        success: true,
        data: post,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

// Delete Post By Id
export const deletePostById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid post ID format",
        success: false,
      });
    }
    const post = await Post.findByIdAndDelete({ _id: id });
    if (!post) {
      return res.status(400).json({
        message: "Post not found",
        success: false,
      });
    }
    if (post) {
      return res.status(200).json({
        message: "Post deleted successfully",
        success: true,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};
