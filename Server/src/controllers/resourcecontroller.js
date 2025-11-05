import Post from "../models/postModel.js";

// Fetch all posts that belong to the authenticated tenant
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({ tenantId: req.tenantId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a post for the authenticated tenant
export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newPost = await Post.create({
      title,
      description,
      tenantId: req.tenantId,
    });

    res.status(201).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a post if it belongs to the authenticated tenant
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findOneAndDelete({ _id: id, tenantId: req.tenantId });

    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found or unauthorized" });
    }

    res.status(200).json({ success: true, message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
