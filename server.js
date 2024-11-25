import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"));
routes(app);

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is ready...");
});