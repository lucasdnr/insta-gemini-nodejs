import express from "express";

const posts = [];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is ready...");
});

app.get("/posts", (req, res) => {
    res.status(200).send("Return All Posts");
});

function getPostById(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    }) 
}

app.get("/posts/:id", (req, res) => {
    const i = getPostById(req.params.id)
    res.status(200).send(posts[i]);
});
