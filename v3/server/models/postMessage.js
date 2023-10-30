const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: String,
    creator: String,
    message: String,
    tags: {
      type: Array,
      default: [],
    },
    selectedFile: String,
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;
