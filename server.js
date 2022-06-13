require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = mongoose.connection;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1/product";
const PORT = process.env.PORT;
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("The connection with mongod is established");
  }
);

db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: "));
db.on("disconnected", () => console.log("mongo disconnected"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
