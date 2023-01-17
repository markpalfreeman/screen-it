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

  const isValid = () => !!name && !!category && !!rating;

  function handleSubmit(event) {
    event.preventDefault();

    // TODO: enhance validation to accessible, on-screen messages
    if (!isValid()) {
      alert("Please complete all fields to add a movie!");
      return;
    }

    addMovie({
      id: nanoid(),
      name,
      category,
      rating,
    });

    setName("");
    setCategory("");
    setRating(null);
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
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className={`${!category ? "no-selection" : ""}`}
          >
            <option value="">Select a category</option>
            <option value="Action/Adventure">Action/Adventure</option>
            <option value="Animation">Animation</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Documentary">Documentary</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Musical">Musical</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thriller</option>
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
