import { Request, Response } from 'express';
import Blog from '../models/blogModel';

export async function fetchAllBlogs(req: Request, res: Response) {
  try {
    const blogs = await Blog.find({});
    return res.status(200).json(blogs);
  } catch (error) {
    return res.json({ message: 'An error occurred' });
  }
}

// fetch a single blog
export async function fetchSingleBlog(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const item = await Blog.findOne({ id });
    if (!item) {
      return res.status(404).json({ message: 'Blog does not exist' });
    }
    const blog = await Blog.findById(id);
    return res.status(200).json(blog);
  } catch (error) {
    return res.status(404).json({ message: 'An error occured fetching blog' });
  }
}

// create blog
export async function createBlog(req: Request, res: Response) {
  try {
    const blog = await Blog.create(req.body);
    return res
      .status(201)
      .json({ blog: blog, message: 'Created blog successfully' });
  } catch (error) {
    return res.status(400).json({ message: 'An error occured creating blog' });
  }
}

// edit blog
export async function editBlog(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const item = await Blog.findOne({ id });
    if (!item) {
      return res.status(404).json({ message: 'Blog does not exist' });
    }
    const blog = await Blog.findByIdAndUpdate(id, req.body);
    return res.status(201).json({ message: 'updated blog successfully' });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ message: 'An error occurred updating your blog' });
  }
}

// delete blog
export async function deleteBlog(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const item = await Blog.findOne({ id });
    if (!item) {
      return res.status(404).json({ message: 'Blog does not exist' });
    }
    await Blog.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Deleted blog successfully' });
  } catch (error) {
    return res
      .status(404)
      .json({ message: 'An error occurred deleting your blog' });
  }
}
