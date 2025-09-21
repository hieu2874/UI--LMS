import { useState } from "react";

function FeatureItem({ icon, title, subtitle, description }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="feature-box">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <span>{description}</span>
      <button onClick={() => setLiked(!liked)}>
        ❤️ {liked ? "Đã thích" : "Thích"}
      </button>
    </div>
  );
}

export default FeatureItem;
