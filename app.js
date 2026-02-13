const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Mongo error:", err));

app.get("/", (req, res) => {
  res.send("App + MongoDB running successfully 🚀");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

