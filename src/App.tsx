import { useState } from 'react';
import { CheckoutModal } from './components/CheckoutModal';
import { FeatureStrip } from './components/FeatureStrip';
import { Header } from './components/Header';
import { PlaceholderImage } from './components/PlaceholderImage';
import { ProductConfigurator } from './components/ProductConfigurator';
import { engineeringBullets, footerLinks } from './content/productPageContent';
import { useScrollReveal } from './hooks/useScrollReveal';

function CrisisDiagram() {
  return (
    <section className="crisis-section" data-reveal>
      <div className="section-heading">
        <h2>The Closed-Lid Crisis.</h2>
        <p>A problem nobody requested, solved with precision that feels expensive.</p>
      </div>
      <div className="diagram-grid">
        <div className="device-card sleeping-device">
          <span className="device-screen">Sleep</span>
          <span>Closed machine</span>
        </div>
        <div className="diagram-arrow" aria-hidden="true">
          <span />
        </div>
        <div className="device-card open-device">
          <span className="open-lid" />
          <span className="airflow-line airflow-line-one">Airflow</span>
          <span className="airflow-line airflow-line-two">Agents running</span>
          <span>OpenClaws device</span>
        </div>
      </div>
    </section>
  );
}

function EngineeringSection() {
  return (
    <section className="engineering-section" id="engineering" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">Engineering</p>
        <h2>Engineering and materials.</h2>
        <p>Engineering that respects workflow and lightly questions it.</p>
      </div>
      <div className="engineering-grid">
        <PlaceholderImage
          label="Material detail placeholder"
          detail="Close crop of aluminum edge"
          variant="wide"
        />
        <article className="engineering-copy">
          <h3>Meticulously machined.</h3>
          <ul>
            {engineeringBullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

function ProductStorySection() {
  return (
    <section className="story-section" id="overview" data-reveal>
      <div className="story-copy">
        <p className="eyebrow">Overview</p>
        <h2>Continuous presence, minimal opening.</h2>
        <p>
          OpenClaws holds a laptop lid at the precise angle where airflow, background tasks, and
          plausible deniability can coexist.
        </p>
      </div>
    </section>
  );
}

function FinePrintFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Domain: openclaws.sasta.dev</strong>
        <p>A satirical portfolio project.</p>
        <p>All similarity to existing products or companies is purely coincidental.</p>
        <nav aria-label="Footer links">
          {footerLinks.map((link) => (
            <a href="#top" key={link}>
              {link}
            </a>
          ))}
        </nav>
      </div>
      <div>
        <strong>Legal-ish Footnote</strong>
        <p>Copyright Do Nothing LLC.</p>
        <p>OpenClaws is fictional. No physical product exists.</p>
        <p>Ships next month, probably.</p>
      </div>
    </footer>
  );
}

function App() {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  useScrollReveal();

  function openCheckoutModal() {
    setIsCheckoutModalOpen(true);
  }

  function closeCheckoutModal() {
    setIsCheckoutModalOpen(false);
  }

  function scrollToConfiguration() {
    document.getElementById('configure')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <>
      <div className="page-shell" id="top">
        <Header onConfigureClick={scrollToConfiguration} />
        <main>
          <section className="hero-section">
            <div className="hero-copy" data-reveal>
              <p className="brand-kicker">OpenClaws</p>
              <h1>Keep agents running 24/7.</h1>
              <p>
                A precision claw that keeps a Mac slightly open so background agents can stay alive.
              </p>
              <div className="hero-price">
                <span>Only</span>
                <strong>$199</strong>
              </div>
            </div>
            <PlaceholderImage
              label="Hero product photo placeholder"
              detail="Mac with OpenClaws attached"
              variant="hero"
            />
            <button className="hero-button" type="button" onClick={scrollToConfiguration}>
              Pre-order now
            </button>
            <p className="shipping-note">Ships next month.</p>
          </section>
          <FeatureStrip />
          <ProductStorySection />
          <CrisisDiagram />
          <EngineeringSection />
          <ProductConfigurator onCheckout={openCheckoutModal} />
        </main>
        <FinePrintFooter />
      </div>
      <CheckoutModal isOpen={isCheckoutModalOpen} onClose={closeCheckoutModal} />
    </>
  );
}

export default App;
