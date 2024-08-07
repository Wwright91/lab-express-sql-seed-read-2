import React, { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

const Songs = () => {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`${API}/songs`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        console.log(resJSON);
        setSongs(resJSON);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      Songs
      {songs.map((song) => {
        return (
          <div key={song.id}>
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            <p>{song.album}</p>
            <p>{song.time}</p>
            <p>{song.is_favorite ? "fav" : "not fav"}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Songs;
