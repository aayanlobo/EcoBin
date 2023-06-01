const mongoose = require("mongoose");
const createSchema = mongoose.Schema;

const AdminProductModel = new createSchema({
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
  additional: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", AdminProductModel);
