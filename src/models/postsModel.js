import { ObjectId } from "mongodb";
import connectToDatabase from "../config/dbConfig.js";

// Connect to the database asynchronously
const connection = await connectToDatabase(process.env.CONNECTION_STRING);

// Get all posts from the database
export async function getAll() {
  const db = connection.db("insta-gemini");
  const collection = db.collection("posts");
  return collection.find().toArray(); // Fetch all documents from the collection
}

// Get a post by ID
export async function getOne(id) {
  const db = connection.db("insta-gemini");
  const collection = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);
  const query = { _id: new ObjectId(objID) };
  return collection.findOne(query);
}

// Create a new post in the database
export async function create(post) {
  const db = connection.db("insta-gemini");
  const collection = db.collection("posts");
  return collection.insertOne(post);
}

// Update a post in the database
export async function update(id, post) {
  const db = connection.db("insta-gemini");
  const collection = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);
  return collection.updateOne({ _id: new ObjectId(objID) }, { $set: post });
}
