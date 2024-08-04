const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

const getSong = async (id) => {
  try {
    const oneSong = await db.oneOrNone("SELECT * FROM songs WHERE id = $1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};

const createSong = async (song) => {
  const { name, artist, album, time, is_favorite } = song;
  try {
    const currSong = await db.oneOrNone(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, artist, album, time, is_favorite]
    );
    return currSong;
  } catch (error) {
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    const songToDelete = await db.oneOrNone(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    return songToDelete;
  } catch (error) {
    return error;
  }
};

const updateSong = async (id, song) => {
  const { name, artist, album, time, is_favorite } = song;
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET name = $1, artist = $2, album = $3, time = $4, is_favorite = $5 WHERE id = $6 RETURNING *",
      [name, artist, album, time, is_favorite, id]
    );
    return updatedSong;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong
};
