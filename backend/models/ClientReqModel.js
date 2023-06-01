const mongoose = require("mongoose");
const createSchema = mongoose.Schema;

const clientReqSchema = new createSchema({
  status: {
    type: String,
    default: "Pending",
  },
  wasteType: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  credit: {
    type: Number,
  },
  useremail: {
    type: String,
  },
  username: {
    type: String,
  },
});

module.exports = mongoose.model("Requested", clientReqSchema);
