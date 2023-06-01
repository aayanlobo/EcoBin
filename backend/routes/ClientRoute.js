const express = require("express");
const router = express.Router();
const Request = require("../models/ClientReqModel");

router.get("/submitRequest", async (req, res) => {
  const requests = await Request.find();
  console.log(requests);
  console.log("Abhiram");
  return res.status(200).json(requests);
});
router.post("/acceptRequest", async (req, res) => {
  const data = req.body;
  // const collector = await User.findOne({ email: data.email });
  const acceptedRequest = await Request.updateOne(
    { _id: data._id },
    { $set: { status: "approved" } }
  );

  return res.status(200).json(acceptedRequest);
});
router.post("/getUserReq", async (req, res) => {
  const data = req.body;
  const UserReq = await Request.find({ useremail: data.useremail });

  return res.status(200).json(UserReq);
});
router.get("/getcredit", async (req, res) => {
  const creditScore = await Request.aggregate([
    {
      $group: {
        _id: "$useremail",
        totalCredit: { $sum: { $toInt: "$credit" } },
      },
    },
  ]);
  console.log("Abhiram", creditScore);
  return res.status(200).json(creditScore);
});
router.get("/totalRequest", async (req, res) => {
  const requests = await Request.countDocuments();

  return res.status(200).json(requests);
});
router.get("/getallrequest", async (req, res) => {
  const requests = await Request.find({ status: "pending" });
  return res.status(200).json(requests);
});
router.post("/submitRequest", async (req, res) => {
  const data = req.body;

  const request = new Request({
    status: "pending",
    wasteType: data.wasteType,
    date: data.date,
    credit: data.wasteType === "Organic" ? 4 : 2,
    useremail: data.useremail,
    username: data.username,
  });

  request
    .save()
    .then((request) => {
      return res.status(200).json(request);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
});

module.exports = router;
