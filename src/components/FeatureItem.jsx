
import { useState, useEffect } from "react";
function FeatureItem({ icon, number, subtitle, description }) {
  
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

export default  FeatureItem;
  