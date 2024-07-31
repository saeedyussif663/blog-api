import { Request, Response } from "express";
import Blog from "../models/blogModel";

// fetch all blogs
export function fetchAllBlogs(req: Request, res: Response) {
  Blog.find({})
    .then((blogs) => res.status(200).json(blogs))
    .catch((error) => res.json({ message: "An error occurred" }));
}

// fetch a single blog
export function fetchSingleBlog(req: Request, res: Response) {
  const id = req.params.id;
  Blog.findById(id)
    .then((blog) => res.status(200).json(blog))
    .catch((err) => res.status(404).json({ message: "Blog not found" }));
}

// create blog
export function createBlog(req: Request, res: Response) {
  Blog.create(req.body)
    .then((blog) => res.status(201).json(blog))
    .then((error) =>
      res.status(400).json({ message: "An error occured creating blog" })
    );
}

// edit blog
export function editBlog(req: Request, res: Response) {
  const id = req.params.id;
  Blog.findByIdAndUpdate(id)
    .then((resolve) =>
      res.status(201).json({ message: "updated successfully" })
    )
    .catch((error) =>
      res.status(404).json({ message: "An error occurred updating your blog" })
    );
}

// delete blog
export function deleteBlog(req: Request, res: Response) {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((resolve) =>
      res.status(200).json({ message: "Deleted blog successfully" })
    )
    .catch((error) =>
      res.status(404).json({ message: "An error occurred deleting your blog" })
    );
}
