import { features } from "../data/features";
import FeatureItem from "./featureItem";

function Feature() 
{
  return (
    <section className="feature">
      <div className="feature-block">
        {features.map((item) => (
          <FeatureItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Feature;
