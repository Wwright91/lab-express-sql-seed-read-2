const express = require("express");
const router = express.Router();

const { getAllPlaylists } = require("../queries/playlist");

router.get("/", async (req, res) => {
  const allPlaylists = await getAllPlaylists();
  if (allPlaylists[0]) {
    res.status(200).json(allPlaylists);
  } else {
    res.status(500).json({ error: "Server error!" });
  }
});

module.exports = router;
