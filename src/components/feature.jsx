

import { features } from "../data/features";
import FeatureCard from "./FeatureCard";
import { useLmsContext } from "./LmsContext";

function Feature() {

  const { query } = useLmsContext();
  const search = String(query || "").toLowerCase();

  const filteredFeatures = features.filter((item) => {
    const subtitle = String(item?.subtitle || "").toLowerCase();
    const description = String(item?.description || "").toLowerCase();
    return subtitle.includes(search) || description.includes(search);
  });

  return (
    <section className="feature">
      <div className="feature-block">
        {filteredFeatures.length > 0 ? (
          filteredFeatures.map((item) =>(
            <FeatureCard key={item.id} {...item} />
          ))
        ) : (
           <p>khong tim thay dich vu</p>
        )}
      </div>
    </section>
  );  
}

export default Feature;
