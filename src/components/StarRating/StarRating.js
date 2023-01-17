import { StarIcon } from "../Icons";
import "./StarRating.css";

const MAX_STARS = 5;

function StarRating({ rating, setRating }) {
  const isFilled = (index) => index < rating;

  return (
    <div className="star-rating">
      {[...Array(MAX_STARS)].map((_, i) => (
        <StarIcon filled={isFilled(i)}></StarIcon>
      ))}
    </div>
  );
}

export { StarRating };
