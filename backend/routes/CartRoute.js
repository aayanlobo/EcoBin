const express = require("express");
const router = express.Router();
const Cart = require("../models/CartModel");

router.post("/getCartItem", async (req, res) => {
  const data = req.body;
  const cart = await Cart.find({ useremail: data.useremail });
  return res.status(200).json(cart);
});
router.post("/deleteCart", async (req, res) => {
  const data = req.body;
  const cart = await Cart.deleteMany({
    $and: [{ useremail: data.useremail }, { description: data.saman }],
  });
  return res.status(200).json(cart);
});
router.post("/submitBuy", async (req, res) => {
  const data = req.body;
  const cart = new Cart({
    useremail: data.useremail,
    description: data.description,
    quantity: data.quantity,
    price: data.price,
    imageurl: data.imageurl,
    subtotal: data.subtotal,
  });

  cart
    .save()
    .then((cart) => {
      return res.status(200).json(cart);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
});
module.exports = router;
