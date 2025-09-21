import { useState } from "react";

function CourseItem({ image, author, title, time, date }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="course-card">
      <div className="course-image">
        <img src={image} alt={title} />
      </div>
      <div className="course-info">
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{time} - {date}</p>
        <button onClick={() => setLiked(!liked)}>
          ❤️ {liked ? "Yêu thích" : "Thích"}
        </button>
      </div>
    </div>
  );
}

export default CourseItem;
