const express = require("express");
const router = express.Router();

const User = require("../models/UserModel");

router.post("/login", async (req, res) => {
  const data = req.body;
  //   const admin = await User.find({
  //     $and: [{ email: data.email }, { password: data.password }],
  //   });

  const admin = await User.findOne({
    email: data.email,
  });

  //   console.log(requests);
  //   console.log("Abhiram");
  if (admin) {
    return res.status(200).json(admin);
  } else {
    return res.status(400).json({ error: "User is not present" });
  }
});
router.get("/collectorlist", async (req, res) => {
  const collector = await User.find({
    $and: [{ role: "collector" }, { status: "none" }],
  });
  return res.status(200).json(collector);
});
router.get("/allusers", async (req, res) => {
  const allusers = await User.find({ role: "User" });
  return res.status(200).json(allusers);
});

router.post("/acceptcollector", async (req, res) => {
  const data = req.body;
  // const collector = await User.findOne({ email: data.email });
  const newCollector = await User.updateOne(
    { email: data.email },
    { $set: { status: "approved" } }
  );

  return res.status(200).json(newCollector);
});
router.post("/rejectcollector", async (req, res) => {
  const data = req.body;
  // const collector = await User.findOne({ email: data.email });
  const rejected = await User.deleteOne({ email: data.email });

  return res.status(200).json(rejected);
});
router.post("/getUser", async (req, res) => {
  const data = req.body;
  const user2 = await User.findOne({ email: data.email });
  if (user2) {
    return res.status(200).json(user2);
  } else {
    return res.status(404).json({ error: "User not found" });
  }
});
router.post("/details", async (req, res) => {
  const data = req.body;
  const user1 = await User.findOne({ email: data.email });

  if (user1) {
    return res.status(200).json(user1);
  } else {
    return res.status(404).json({ error: "User is not present" });
  }
});
router.get("/statitics", async (req, res) => {
  const number = await User.countDocuments({ role: "User" });

  return res.status(200).json(number);
});
router.get("/collector", async (req, res) => {
  const collectors = await User.countDocuments({
    $and: [{ role: "collector" }, { status: "approved" }],
  });
  return res.status(200).json(collectors);
});
router.post("/signUp", async (req, res) => {
  const data = req.body;

  const newUser = new User({
    username: data.username,
    email: data.email,
    password: data.password,
    role: data.role,
    status: "none",
  });

  newUser
    .save()
    .then((newUser) => {
      return res.status(200).json(newUser);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err);
    });
});

// router.post("/login", async (req, res) => {
//   const data = req.body;
//   const user = new User({
//     email: data.email,
//     password: data.password,
//     role: "admin",
//   });

//   user
//     .save()
//     .then((user) => {
//       return res.status(200).json(user);
//     })
//     .catch((err) => {
//       console.log(err);
//       return res.status(500).json(err);
//     });
// });

module.exports = router;
