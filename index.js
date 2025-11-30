import express from "express";
import cors from "cors";
import { connectToDatabase } from "./config/db.js";
import dotenv from "dotenv";
import CreatePostRouter from "./routes/post.js"

dotenv.config({ path: ".env" });

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// post
app.use("/api/post",CreatePostRouter)

app.use("/", (req,res) => {
  res.send("<h1>Use /api/post endpoint</h1>")
})
const mongoDbUrl = process.env.MONGODB_URL;
const dbName = process.env.DB_NAME;

await connectToDatabase(mongoDbUrl, dbName);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
