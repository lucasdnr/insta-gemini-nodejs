import express from "express";
import connectToDatabase from "./src/config/dbConfig.js";

const connection = await connectToDatabase(process.env.CONNECTION_STRING);
const posts = [];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is ready...");
});

async function getAllPosts(){
    const db = connection.db("insta-gemini");
    const collection = db.collection("posts");
    return collection.find().toArray();
}

function getPostById(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    }) 
}

app.get("/posts", async (req, res) => {
    const posts = await getAllPosts();
    res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
    const i = getPostById(req.params.id)
    res.status(200).send(posts[i]);
});
