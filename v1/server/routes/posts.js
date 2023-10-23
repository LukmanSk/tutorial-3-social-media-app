const express = require("express");

const { getPosts, createPost } = require("../controllers/posts");

const router = express.Router();

// http://localhost:5000/posts

router.get("/", getPosts);
router.post("/", createPost);

module.exports = router;
