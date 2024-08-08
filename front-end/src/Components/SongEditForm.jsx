import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const SongEditForm = () => {
  const [songForm, setSongForm] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        setSongForm(resJSON);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleTextChange = (e) => {
    setSongForm({
      ...songForm,
      [e.target.id]: e.target.value,
    });
  };

  const handleCheckboxChange = () => {
    setSongForm({ ...songForm, is_favorite: !songForm.is_favorite });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API}/songs/${id}`, {
      method: "PUT",
      body: JSON.stringify(songForm),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/songs/${id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      SongEditForm
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={songForm.name}
          required
          onChange={handleTextChange}
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          value={songForm.artist}
          required
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          value={songForm.album}
          required
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          value={songForm.time}
          required
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Is Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          checked={songForm.is_favorite}
          onChange={handleCheckboxChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SongEditForm;
