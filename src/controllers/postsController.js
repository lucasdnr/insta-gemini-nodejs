import fs from "fs";
import { getAllPosts, createPost, getOnePost } from "../models/postsModel.js";

export async function listPosts(req, res) {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error");
  }
}

export async function newPost(req, res) {
  const post = req.body;
  try {
    const newPost = await createPost(post);
    res.status(200).json(newPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error");
  }
}

export async function imageUpload(req, res) {
  const post = {
    description: "",
    img_url: req.file.originalname,
    img_alt: "",
  };

  try {
    const newPost = await createPost(post);
    const image = `uploads/${newPost.insertedId}.jpg`;
    fs.renameSync(req.file.path, image);
    res.status(200).json(newPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error");
  }
}

export async function getPostById(req, res) {
  const id = req.params.id;
  try {
    const post = await getOnePost(id);
    res.status(200).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error");
  }
}
