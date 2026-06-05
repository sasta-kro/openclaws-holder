import { productFeatures } from '../content/productPageContent';

export function FeatureStrip() {
  return (
    <section className="feature-strip" aria-label="OpenClaws benefits">
      {productFeatures.map((feature) => (
        <article className="feature-item" key={feature.label} data-reveal>
          <span className="feature-icon" aria-hidden="true">
            {feature.iconLabel}
          </span>
          <h3>{feature.title}</h3>
          <p>{feature.summary}</p>
        </article>
      ))}
    </section>
  );
}
