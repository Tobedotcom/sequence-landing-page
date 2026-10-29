import contractsImage from "../assets/images/contracts-image.png";

import "../css/components/featureSection.css";

import { useStaggerReveal } from "../hooks/useStaggerReveal";

function FeatureSection() {
  const featureRef = useStaggerReveal();

  return (
    <section className="feature-section" ref={featureRef}>
      <div className="feature-section__left">
        <p className="feature-section__eyebrow stagger-item">
          Get control of your revenue connection
        </p>

        <h2 className="feature-section__title stagger-item">
          Made for software companies with custom contracts and hybrid pricing.
        </h2>

        <p className="feature-section__description stagger-item">
          Translate commercial terms from quotes or contracts into automated
          billing schedules. Includes discounts, minimums, credit grants and
          more. Create a source of truth for products and pricing using the
          product catalogue.
        </p>
      </div>

      <div className="feature-section__right stagger-item">
        <div className="feature-flow">
          <img
            src={contractsImage}
            alt=""
            className="feature-flow__complete-image"
          />
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
