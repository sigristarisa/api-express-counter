const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const counter = require("./data/counter");

const app = express();
app.use(morgan("dev"));
app.use(cors());
const port = 3030;

app.get("/", (req, res) => {
  console.log("got request!");
  res.send("Hello!");
});

app.get("/counter", (req, res) => {
  res.json({ counter: counter });
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
