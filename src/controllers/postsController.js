import { getAllPosts, createPost, getOnePost } from "../models/postsModel.js";

export async function listPosts(req, res) {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(404).send("Error");
  }
}

export async function newPost(req, res) {
  const post = req.body;
  try {
    const newPost = await createPost(post);
    res.status(200).json(newPost);
  } catch (error) {
    console.error(error.message);
    res.status(404).send("Error");
  }
}

export async function imageUpload(req, res) {
  const post = req.body;
  try {
    const newPost = await createPost(post);
    res.status(200).json(newPost);
  } catch (error) {
    console.error(error.message);
    res.status(404).send("Error");
  }
}

export async function getPostById(req, res) {
  const id = req.params.id;
  try {
    const post = await getOnePost(id);
    res.status(200).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(404).send("Error");
  }
}
