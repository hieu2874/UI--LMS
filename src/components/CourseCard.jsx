import { useState, useEffect } from "react";

function CourseCard({ id, title, description, author, image, date, time, onClick, isFavorite, toggleFavorite }) {
  return (
    <div className={`course-card ${isFavorite ? "liked" : ""}`} onClick={onClick}>
      <div className="course-image">
        <img src={image} alt={title} />
      </div>
      <div className="course-info">
        <p className="author">{author}</p>
        <h3>{title}</h3>
        <p> {description}</p>
        <div className="date-time">
          <div className="time">
            <img src="/image/icon2.png" alt="" />
            <span className="time">{time}</span>
          </div>
          <div className="date">
            <img src="/image/icon1.png" alt="" />
            <span className="date">{date}</span>
          </div>
        </div>
       <button
          onClick={(e) => {e.stopPropagation(); toggleFavorite();}}
          className={isFavorite ? "liked" : ""}
          aria-label={isFavorite ? "Unlike" : "Like"}
        >
          {isFavorite ? "❤️" : "♡"}
        </button>
      </div>
    </div>
  );
}

export default CourseCard;

