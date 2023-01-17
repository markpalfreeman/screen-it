import { MovieAvatar } from "../MovieAvatar";
import { StarRating } from "../StarRating";
import "./MovieCard.css";

function MovieCard({ name, category, rating }) {
  return (
    <div className="movie-card block">
      <div className="movie-card__avatar">
        <MovieAvatar name={name}></MovieAvatar>
      </div>
      <div className="movie-card__info">
        <h3 className="movie-card__title">{name}</h3>
        <p className="movie-card__category">{category}</p>
      </div>
      <div className="movie-card__rating">
        <StarRating rating={rating}></StarRating>
      </div>
    </div>
  );
}

export { MovieCard };
