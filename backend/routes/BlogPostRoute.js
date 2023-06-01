const express = require("express");
const router = express.Router();
const Blog = require("../models/BlogPostModel");

router.get("/getBlog", async (req, res) => {
  const blog = await Blog.find();
  return res.status(200).json(blog);
});
router.post("/deleteCart", async (req, res) => {
  const data = req.body;
  const cart = await Cart.deleteMany({
    $and: [{ useremail: data.useremail }, { description: data.saman }],
  });
  return res.status(200).json(cart);
});
router.post("/submitBlog", async (req, res) => {
  const data = req.body;
  const BlogData = new Blog({
    title: data.title,
    content: data.content,
    category: data.category,
    date: data.date,
  });

  BlogData.save()
    .then((blog) => {
      return res.status(200).json(blog);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
});
module.exports = router;
