import { useState, useEffect } from "react";
function CourseCard({ id, title, description, author, image, date, time }) {
const [liked, setLiked] = useState(false);
const [hasInteracted, setHasInteracted] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem(`course-liked-${id}`);
    if  (saved === "true") { 
      setLiked(true);
      setHasInteracted(true);
  }
  }, [id]);

  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    setHasInteracted(true); 
    localStorage.setItem(`course-liked-${id}`, newLiked);
  };

  return (
    <div className={`course-card ${liked ? "liked" : ""}`}>
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
          onClick={toggleLike}
          className={liked && hasInteracted ? "liked" : ""}
          aria-label={liked ? "Unlike" : "Like"}
        >
          ♡
        </button>
      </div>
    </div>
  );
}

export default CourseCard;


