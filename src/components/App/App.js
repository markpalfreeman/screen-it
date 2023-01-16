import React, { useState } from "react";
import { nanoid } from "nanoid";
import { AppHeader } from "../AppHeader";
import { AddMovieForm } from "../AddMovieForm/AddMovieForm";
import { MovieCard } from "../MovieCard";
import "./App.css";

const initialMovies = [
  {
    id: nanoid(),
    category: "Science Fiction-fi",
    name: "Interstellar",
  },
  {
    id: nanoid(),
    category: "Science Fiction-fi",
    name: "Interstellar",
  },
  {
    id: nanoid(),
    category: "Science Fiction-fi",
    name: "Interstellar",
  },
  {
    id: nanoid(),
    category: "kasdfkj",
    name: "aksjdfkasdf",
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);

  function addMovie(movie) {
    setMovies([...movies, movie]);
  }

  return (
    <div className="app">
      <AppHeader></AppHeader>
      <main>
        <AddMovieForm addMovie={addMovie}></AddMovieForm>
        <hr />
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie}></MovieCard>
        ))}
      </main>
    </div>
  );
}

export { App };
