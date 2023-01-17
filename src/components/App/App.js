import React, { useState } from "react";
import { nanoid } from "nanoid";
import { AppHeader } from "../AppHeader";
import { AddMovieForm } from "../AddMovieForm/AddMovieForm";
import { MovieCard } from "../MovieCard";
import "./App.css";

const initialMovies = [
  {
    id: nanoid(),
    category: "Sci-Fi",
    name: "Interstellar",
    rating: 5,
  },
  {
    id: nanoid(),
    category: "Animation",
    name: "Moana",
    rating: 4,
  },
  {
    id: nanoid(),
    category: "Comedy",
    name: "Ace Ventura: When Nature Calls",
    rating: 4,
  },
  {
    id: nanoid(),
    category: "Comedy",
    name: "The Sandlot",
    rating: 4,
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);

  function addMovie(movie) {
    setMovies([movie, ...movies]);
  }

  return (
    <div className="app">
      <AppHeader></AppHeader>
      <main className="container">
        <AddMovieForm addMovie={addMovie}></AddMovieForm>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie}></MovieCard>
        ))}
      </main>
    </div>
  );
}

export { App };
