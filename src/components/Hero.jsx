import heroPreview1 from "../assets/images/hero-preview-1.png";
import heroPreview2 from "../assets/images/hero-preview-2.png";
import heroPreview3 from "../assets/images/hero-preview-3.png";

import { useEffect, useRef } from "react";

import "../css/components/hero.css";

import { useStaggerReveal } from "../hooks/useStaggerReveal";

function Hero() {
  const floatTopRef = useRef(null);

  const floatBottomRef = useRef(null);

  const heroRef = useStaggerReveal();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;

        if (floatTopRef.current) {
          floatTopRef.current.style.transform = `translateY(${y * 0.15}px)`;
        }

        if (floatBottomRef.current) {
          floatBottomRef.current.style.transform = `translateY(${y * -0.1}px)`;
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__content">
        <p className="hero__eyebrow stagger-item">
          Designed for custom contracts and usage-based pricing
        </p>

        <h1 className="hero__title stagger-item">
          Quote to Revenue,
          <br />
          streamlined.
        </h1>

        <p className="hero__description stagger-item">
          Custom pricing shouldn't slow down your revenue operations. B2B
          companies of all sizes use Sequence to scale Pricing, billing and
          invoiving workflows.
        </p>

        <form className="hero__input stagger-item">
          <input
            type="email"
            placeholder="Email address"
            className="hero__input-field"
          />

          <button className="hero__input-button" type="submit">
            Book demo
          </button>
        </form>
      </div>

      <div className="hero__preview">
        <img
          src={heroPreview1}
          alt="Sequence product interface"
          className="stagger-item"
        />

        <img
          ref={floatTopRef}
          src={heroPreview2}
          alt=""
          className="stagger-item"
        />

        <img
          ref={floatBottomRef}
          src={heroPreview3}
          alt=""
          className="stagger-item"
        />
      </div>
    </section>
  );
}

export default Hero;