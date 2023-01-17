import "./MovieAvatar.css";

function formatInitials(name) {
  return name
    .split(" ")
    .map((string) => string.charAt(0).toUpperCase())
    .join("")
    .slice(0, 3); // max 3 chars
}

function MovieAvatar({ name }) {
  const initials = formatInitials(name);

  return (
    <div
      className={`movie-avatar ${initials.length > 2 ? "small-text" : null}`}
    >
      {initials}
    </div>
  );
}

export { MovieAvatar };
