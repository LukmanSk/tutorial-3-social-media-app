const PostMessage = require("../models/postMessage");

exports.getPosts = async (req, res) => {
  try {
    const posts = await PostMessage.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.createPost = async (req, res) => {
  const post = req.body;
  try {
    const newPost = await new PostMessage(post);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json(error);
  }
};
