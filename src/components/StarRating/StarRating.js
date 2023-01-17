import React from "react";
import { StarIcon } from "../Icons";
import "./StarRating.css";

const MAX_STARS = 5;

function StarRating({ rating, setRating }) {
  const [activeIndex, setActiveIndex] = React.useState(null);

  function isFilled(index) {
    // fill "active" (hover/focus)
    if (activeIndex !== null) {
      return index <= activeIndex;
    }

    // fill existing rating
    if (rating) {
      return index + 1 <= rating;
    }

    return false;
  }

  return (
    <div className="star-rating">
      {[...Array(MAX_STARS)].map((_, i) =>
        setRating ? (
          <button
            type="button"
            aria-label={`Rate: ${i + 1} out of ${MAX_STARS} stars`}
            key={i}
            onClick={() => setRating(i + 1)}
            onMouseOver={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onBlur={() => setActiveIndex(null)}
          >
            <StarIcon filled={isFilled(i)}></StarIcon>
          </button>
        ) : (
          <StarIcon filled={isFilled(i)} key={i}></StarIcon>
        )
      )}
    </div>
  );
}

export { StarRating };
