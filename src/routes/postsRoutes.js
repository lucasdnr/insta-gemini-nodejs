import express from "express";
import multer from "multer";
import {
  listPosts,
  newPost,
  getPostById,
  imageUpload,
} from "../controllers/postsController.js";

// Set up multer for Windows
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
  app.use(express.json()); // Parse incoming JSON data

  // Route to get all posts
  app.get("/posts", listPosts);

  // Route to create a new post
  app.post("/posts", newPost);

  // Route to get a post by ID
  app.get("/posts/:id", getPostById);

  // Route to upload an image
  app.post("/upload", upload.single("image"), imageUpload);
};

export default routes;
