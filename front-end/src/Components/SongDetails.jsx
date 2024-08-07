import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API = import.meta.env.VITE_API_URL;

const SongDetails = () => {
  const [song, setSong] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        console.log(resJSON);
        setSong(resJSON);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      SongDetails
      <p>Name: {song.name}</p>
      <p>Artist: {song.artist}</p>
      <p>Album: {song.album}</p>
      <p>Time: {song.time}</p>
      <p>Favorite: {song.is_favorite ? "♥︎" : "♡"}</p>
      <button>
        <Link to="/songs">Back</Link>
      </button>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default SongDetails;
