import { Clock3, Fan, ShieldCheck, type LucideIcon } from 'lucide-react';
import { productFeatures } from '../content/productPageContent';

const featureIcons: Record<string, LucideIcon> = {
  'Run non-stop': Clock3,
  'Stays cool': Fan,
  'Secure hold': ShieldCheck,
};

export function FeatureStrip() {
  return (
    <section className="feature-strip" aria-label="OpenClaws benefits">
      {productFeatures.map((feature) => {
        const Icon = featureIcons[feature.title];

        return (
          <article className="feature-item" key={feature.label} data-reveal>
            <span className="feature-icon" aria-hidden="true">
              <Icon size={26} strokeWidth={2.15} />
            </span>
            <div className="feature-copy">
              <h3>{feature.title}</h3>
              <p>{feature.summary}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
