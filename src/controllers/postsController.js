import fs from "fs";
import { getAll, create, getOne, update } from "../models/postsModel.js";
import generateDescriptionWithGemini from "../services/geminiService.js";

export async function listPosts(req, res) {
  try {
    const posts = await getAll();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error");
  }
}

export async function newPost(req, res) {
  const post = req.body;
  try {
    const newPost = await create(post);
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
    const newPost = await create(post);
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
    const post = await getOne(id);
    res.status(200).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error");
  }
}

export async function updatePost(req, res) {
  try {
    const id = req.params.id;
    const imgUrl = `http://localhost:3000/${id}.jpg`;
    const imgBuffer = fs.readFileSync(`uploads/${id}.jpg`);
    const description = await generateDescriptionWithGemini(imgBuffer);

    const post = {
      description: description,
      img_url: imgUrl,
      img_alt: req.body.img_alt,
    };

    const updatePost = await update(id, post);
    res.status(200).json(updatePost);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error");
  }
}
