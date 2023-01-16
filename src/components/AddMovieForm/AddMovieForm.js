import React from "react";
import { nanoid } from "nanoid";
import "./AddMovieForm.css";
import { StarRating } from "../StarRating";

export const FIELD_ID = {
  TITLE: "new-movie-title",
  CATEGORY: "new-movie-category",
  RATING: "new-movie-rating",
};

function AddMovieForm({ addMovie }) {
  function handleSubmit(event) {
    event.preventDefault();

    addMovie({
      id: nanoid(),
      name: "test-name",
      category: "test-category",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="new-movie-title">Name</label>
        <input
          id="new-movie-title"
          type="text"
          placeholder="Name of the movie"
        />
      </div>
      <div>
        <label htmlFor={FIELD_ID.CATEGORY}>Category</label>
        <select id={FIELD_ID.CATEGORY} defaultValue="">
          <option value="" className="placeholder">
            Select a category
          </option>
          <option value="action">Action/Adventure</option>
          <option value="animation">Animation</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="drama">Drama</option>
          <option value="documentary">Documentary</option>
          <option value="history">History</option>
          <option value="horror">Horror</option>
          <option value="musical">Musical</option>
          <option value="romance">Romance</option>
          <option value="scifi">Sci-fi</option>
          <option value="thriller">Thriller</option>
        </select>
      </div>
      <div>
        <label htmlFor={FIELD_ID.RATING}></label>
        <StarRating
          rateMovie={(rating) => alert("rate: ", rating)}
        ></StarRating>
      </div>
      <button type="submit">Add movie</button>
    </form>
  );
}

export { AddMovieForm };
