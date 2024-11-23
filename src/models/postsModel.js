import { ObjectId } from 'mongodb';
import connectToDatabase from "../config/dbConfig.js";

// Connect to the database asynchronously
const connection = await connectToDatabase(process.env.CONNECTION_STRING);

// Get all posts from the database
export async function getAllPosts() {
  const db = connection.db("insta-gemini");
  const collection = db.collection("posts");
  return collection.find().toArray(); // Fetch all documents from the collection
}

// Get a post by ID
export async function getOnePost(id) {
    const db = connection.db("insta-gemini");
    const collection = db.collection("posts");
    const query = { _id: ObjectId.createFromHexString(id) };
    return collection.findOne(query);
}

// Create a new post in the database
export async function createPost(post) {
  const db = connection.db("insta-gemini");
  const collection = db.collection("posts");
  return collection.insertOne(post);
}