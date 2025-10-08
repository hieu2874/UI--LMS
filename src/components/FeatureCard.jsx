
import { useState, useEffect } from "react";
function FeatureCard({ icon, number, subtitle, description }) {
  
  return (
    <div className="feature-box">
      <div className="icon">
        <img src={icon} alt={subtitle} />
      </div>
      <h3>{number}</h3>
      <p>{subtitle}</p>
      <span>{description}</span>
    </div>
  );
}

export default  FeatureCard;
  