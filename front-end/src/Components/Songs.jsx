import React, { useEffect, useState } from "react";
import Song from "./Song";

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
        return <Song song={song} key={song.id} />;
      })}
    </div>
  );
};

export default Songs;
