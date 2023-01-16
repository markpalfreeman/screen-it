const MAX_STARS = 5;

function StarRating({ rating, setRating }) {
  const isFilled = (index) => index <= rating;

  return (
    <div className="star-rating">
      {[...Array(MAX_STARS)].map((_, i) => (
        <span key={i}>{isFilled(i) ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export { StarRating };
