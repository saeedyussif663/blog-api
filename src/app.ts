import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

import connectToDB from "./utils/lib";
import blogsRouter from "./routes/blogRoutes";

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.use("/api/blogs", blogsRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello, TypeScript with Express!</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectToDB();
});
