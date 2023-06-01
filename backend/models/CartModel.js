const mongoose = require("mongoose");
const createSchema = mongoose.Schema;

const CartModel = new createSchema({
  useremail: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageurl: {
    type: String,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Cart", CartModel);
