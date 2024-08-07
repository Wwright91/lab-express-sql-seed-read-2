import React from "react";
import { Link } from "react-router-dom";

const Song = ({ song }) => {
  return (
    <div>
      Song
      <Link to={`/songs/${song.id}`}>
        <h3>{song.name}</h3>
      </Link>
      <h4>{song.artist}</h4>
      <p>{song.album}</p>
      <p>{song.time}</p>
      <p>{song.is_favorite ? "♥︎" : "♡"}</p>
    </div>
  );
};

export default Song;
