DROP DATABASE IF EXISTS tuner;
CREATE DATABASE tuner;

\c tuner;

DROP TABLE IF EXISTS songs;
CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT NOT NULL,
  album TEXT,
  time TEXT,
  is_favorite BOOL
);

DROP TABLE IF EXISTS playlists;
CREATE TABLE playlists (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  image TEXT,
  genre TEXT,
  is_private BOOL
);