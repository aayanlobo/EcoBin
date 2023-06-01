const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const ClientRoute = require("./routes/ClientRoute");
const UserRoute = require("./routes/UserRoute");
const AdminRoute = require("./routes/AdminRoute");
const CartRoute = require("./routes/CartRoute");
const BlogPostRoute = require("./routes/BlogPostRoute");
const db = require("./db");
const app = express();
const http = require("http");

dotenv.config();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
app.get("/", (req, res) => {
  res.send("Welcome to Waste Backend");
});
db();

app.use("/", ClientRoute);
app.use("/", UserRoute);
app.use("/", AdminRoute);
app.use("/", CartRoute);
app.use("/", BlogPostRoute);
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
