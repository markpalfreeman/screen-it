import { MovieAvatar } from "../MovieAvatar";
import { StarRating } from "../StarRating";

function MovieCard({ name, category, rating }) {
  return (
    <div className="movie-card">
      <MovieAvatar name={name}></MovieAvatar>
      <div className="movie-card--title">
        <h3>{name}</h3>
        <p>{category}</p>
      </div>
      <StarRating rating={rating}></StarRating>
    </div>
  );
}

export { MovieCard };
