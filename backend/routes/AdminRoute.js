const express = require("express");
const router = express.Router();
const Admin = require("../models/AdminProductModel");

router.get("/submitProduct", async (req, res) => {
  const admin = await Admin.find();
  return res.status(200).json(admin);
});
router.get("/totalproduct", async (req, res) => {
  const admin = await Admin.countDocuments();
  return res.status(200).json(admin);
});
router.post("/submitProduct", async (req, res) => {
  const data = req.body;
  const admin = new Admin({
    description: data.description,
    quantity: data.quantity,
    price: data.price,
    imageurl: data.imageurl,
    additional: data.additional,
  });

  admin
    .save()
    .then((admin) => {
      return res.status(200).json(admin);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
});
module.exports = router;
