import express from "express";
import {
  listPosts,
  newPost,
  getPostById,
} from "../controllers/postsController.js";

const routes = (app) => {
  app.use(express.json()); // Parse incoming JSON data

  // Route to get all posts
  app.get("/posts", listPosts);

  // Route to create a new post
  app.post("/posts", newPost);

  // Route to get a post by ID
  app.get("/posts/:id", getPostById);
};

export default routes;
