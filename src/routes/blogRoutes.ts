import { Router } from "express";
import {
  createBlog,
  fetchAllBlogs,
  fetchSingleBlog,
  editBlog,
  deleteBlog,
} from "../controllers/blogController";

const router = Router();

router.get("/", fetchAllBlogs);

router.post("/create", createBlog);

router.put("/edit/:id", editBlog);

router.delete("/delete/:id", deleteBlog);

router.get("/:id", fetchSingleBlog);

export default router;
