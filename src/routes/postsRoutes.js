import express from "express";
import multer from "multer";
import cors from "cors";
import {
  listPosts,
  newPost,
  getPostById,
  imageUpload,
  updatePost,
} from "../controllers/postsController.js";

// Set up multer for Windows
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
}

const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
  app.use(express.json()); // Parse incoming JSON data

  app.use(cors(corsOptions));
  
  // Route to get all posts
  app.get("/posts", listPosts);

  // Route to get a post by ID
  app.get("/posts/:id", getPostById);

  // Route to create a new post
  app.post("/posts", newPost);

  // Route to upload an image
  app.post("/upload", upload.single("image"), imageUpload);

  // Route to update a post
  app.put("/posts/:id", updatePost);
};

export default routes;
