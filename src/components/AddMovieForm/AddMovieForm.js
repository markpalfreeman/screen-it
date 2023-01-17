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
  const [name, setName] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [rating, setRating] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    addMovie({
      id: nanoid(),
      name,
      category,
      rating,
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
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </div>
      <div className="form-group">
        <label htmlFor={FIELD_ID.CATEGORY}>Category</label>
        <div className="select control">
          <select
            id={FIELD_ID.CATEGORY}
            defaultValue=""
            onChange={(event) => setCategory(event.target.value)}
          >
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
            <option value="scifi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor={FIELD_ID.RATING}>Rating</label>
        <StarRating
          rating={rating}
          setRating={(value) => setRating(value)}
        ></StarRating>
      </div>
      <button type="submit" className="button">
        Add Movie
      </button>
    </form>
  );
}

export { AddMovieForm };
