import React from "react";

const CourseCard = React.memo(function CourseCard({
  id,
  title,
  description,
  author,
  image,
  date,
  time,
  onClick,
  isFavorite,
  toggleFavorite
}) {
  
  console.log("Render CourseCard:", id);
  
  return (
    <div className={`course-card ${isFavorite ? "liked" : ""}`} onClick={onClick}>
      <div className="course-image">
        <img src={image} alt={title} />
      </div>
      <div className="course-info">
        <p className="author">{author}</p>
        <h3>{title}</h3>
        <p> {description}</p>
        <button
          onClick={(e) => { e.stopPropagation(); toggleFavorite(); }}
          className={isFavorite ? "liked" : ""}
          aria-label={isFavorite ? "Unlike" : "Like"}
        >
          {isFavorite ? "❤️" : "♡"}
        </button>
      </div>
    </div>
  );
});

export default CourseCard;

