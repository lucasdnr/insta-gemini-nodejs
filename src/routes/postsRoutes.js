import express from "express";
import { listPosts } from "../controllers/postsController.js";

const routes = (app) => {
  app.use(express.json()); // Parse incoming JSON data

  // Route to get all posts
  app.get("/posts", listPosts);

  // Route to get a post by ID
//   app.get("/posts/:id", (req, res) => {
//     const index = getPostById(req.params.id);
//     if (index !== -1) {
//       res.status(200).send(posts[index]);
//     } else {
//       res.status(404).send("Post not found"); // Send 404 Not Found if post not found
//     }
//   });
};

export default routes;
