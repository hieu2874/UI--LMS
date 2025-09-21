import FeatureItem from "./FeatureItem";

function Feature({ data }) {
  return (
    <section className="feature">
      <div className="feature-block">
        {data.map((item) => (
          <FeatureItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Feature;
