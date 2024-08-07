const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

const songController = require("./controllers/songController.js");
app.use("/songs", songController);

const playlistController = require("./controllers/playlistController.js");
app.use("/playlists", playlistController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
