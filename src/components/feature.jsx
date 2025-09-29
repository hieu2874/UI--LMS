import { features } from "../data/features";
import FeatureItem from "./featureItem";

function Feature({ query }) {
  const filteredFeatures = features.filter((item)=>
    item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );
  
  return (
    <section className="feature">
      <div className="feature-block">
        {filteredFeatures.length > 0 ? (
          filteredFeatures.map((item) =>(
            <FeatureItem key={item.id} {...item} />
          ))
        ) : (
           <p>khong tim thay dich vu</p>
        )}
      </div>
    </section>
  );  
}

export default Feature;
