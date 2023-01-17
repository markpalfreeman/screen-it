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
    <form className="add-movie-form block" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="new-movie-title">Name</label>
        <input
          className="control"
          id="new-movie-title"
          type="text"
          placeholder="Name of the movie"
        />
      </div>
      <div className="form-group">
        <label htmlFor={FIELD_ID.CATEGORY}>Category</label>
        <div className="select control">
          <select id={FIELD_ID.CATEGORY} defaultValue="">
            <option value="">Select a category</option>
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
      </div>
      <div className="form-group">
        <label htmlFor={FIELD_ID.RATING}>Rating</label>
        <StarRating
          rateMovie={(rating) => alert("rate: ", rating)}
        ></StarRating>
      </div>
      <button type="submit" className="button">
        Add Movie
      </button>
    </form>
  );
}

export { AddMovieForm };
