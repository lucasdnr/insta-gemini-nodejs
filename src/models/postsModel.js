import connectToDatabase from "../config/dbConfig.js";

// Connect to the database asynchronously
const connection = await connectToDatabase(process.env.CONNECTION_STRING);

// Get all posts from the database
export default async function getAllPosts() {
  const db = connection.db("insta-gemini");
  const collection = db.collection("posts");
  return collection.find().toArray(); // Fetch all documents from the collection
}

// Get a post by ID
// function getPostById(id) {
//   return posts.findIndex((post) => post.id === Number(id));
// }
