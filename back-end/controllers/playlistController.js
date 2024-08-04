const express = require("express");
const router = express.Router();

const { getAllPlaylists, getPlaylist } = require("../queries/playlist");

router.get("/", async (req, res) => {
  const allPlaylists = await getAllPlaylists();
  if (allPlaylists[0]) {
    res.status(200).json(allPlaylists);
  } else {
    res.status(500).json({ error: "Server error!" });
  }
});

router.get("/:name", async (req, res) => {
  const getOnePlaylist = await getPlaylist(req.params.name);
  if (getOnePlaylist) {
    res.status(200).json(getOnePlaylist);
  } else {
    res.status(404).json({ error: "Not found!" });
  }
});

module.exports = router;
