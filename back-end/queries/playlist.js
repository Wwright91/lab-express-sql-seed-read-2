const db = require("../db/dbConfig.js");

const getAllPlaylists = async () => {
  try {
    const allPlaylists = await db.any("SELECT * FROM playlists");
    return allPlaylists;
  } catch (error) {
    throw error;
  }
};

const getPlaylist = async (name) => {
  try {
    const playlist = await db.oneOrNone(
      "SELECT * FROM playlists WHERE LOWER(name) = LOWER($1)",
      name
    );
    return playlist;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllPlaylists, getPlaylist };
