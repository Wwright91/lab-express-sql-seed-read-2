const express = require("express");
const router = express.Router();
const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require("../queries/song");
const {checkName, checkFavorite} = require("../validations/checkSong")

router.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song) {
    res.json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

router.post("/", checkName, checkFavorite, async (req, res) => {
  const song = await createSong(req.body);
  res.status(201).json(song);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  const deletedSong = await deleteSong(id)
    if (deletedSong) {
      res.status(200).json(deletedSong)
    } else {
      res.status(404).json({error: "Not found"})
    }
})

router.put("/:id", checkName, checkFavorite, async (req, res) => {
  const { id } = req.params
  const song = req.body
  try {
    const updatedSong = await updateSong(id, song)
    res.status(200).json(updatedSong)
  } catch (error) {
    res.status(404).json({error: `Song with id: ${id} not found!`})
  }
})

module.exports = router;
