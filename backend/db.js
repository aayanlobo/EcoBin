const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const MONGO_URL =
  "mongodb+srv://abhiramtripathipanna:Abhiram123@cluster0.orshfsv.mongodb.net/test";

const DB = () => {
  mongoose.set("strictQuery", false);

  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
  });

  const db = mongoose.connection;

  const handleOpen = () => console.log("Connected to DB");

  const handleError = (error) => console.log(`Error on DB Connection:${error}`);

  db.once("open", handleOpen);
  db.on("error", handleError);
};

module.exports = DB;
