const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const counter = require("./data/counter");

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
const port = 3030;

app.get("/", (req, res) => {
  console.log("got request!");
  res.send("Hello!");
});

app.get("/counter", (req, res) => {
  res.json({ counter: counter });
});

app.post("/counter/increment", (req, res) => {
  console.log(req.body);
  const incrementCounter = { ...req.body, increment: 1 };
  res.json(incrementCounter);
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
