import TestimonialCard from "./TestimonialCard";

import "../css/components/testimonialSection.css";

import { useStaggerReveal } from "../hooks/useStaggerReveal";

function TestimonialsSection() {
  const testimonialsRef = useStaggerReveal();

  return (
    <section className="testimonials-section">
      <div className="testimonials-section__intro">
        <h2 className="testimonials-section__title">
          Loved by ambitious teams at every stage
        </h2>

        <p className="testimonials-section__description">
          Whether you're introducing new pricing, scaling your revenue
          operations or consolidating your software stack, Sequence works for
          you.
        </p>
      </div>

      <div
        className="testimonials-section__grid"
        ref={testimonialsRef}
      >
        <div className="stagger-item">
          <TestimonialCard
            quote="“With our company and client base growing quickly, we partnered with Sequence to help us automate our invoicing process. It was great to work with a team that took the time to properly understand our complex invoicing requirements. In a short timeframe, Sequence were able to design a bespoke solution for us that we understood and trusted. By delving into our main billing pain points, the platform they created for us was much superior to any other that we could find on the market. An extremely impressive team and product that I can see going far in this industry!”"
            name="Annabel Jenney"
            role="Financial Operations Manager, Accurx"
          />
        </div>

        <div className="stagger-item">
          <TestimonialCard
            quote="“Sequence has one of the most impressive platforms for billing and RevOps that we've seen: it's clear the platform can save significant time and effort in the quote-to-cash process for companies (like Yapily) which have complex pricing and usage models. It was a pleasure to work with the Sequence team, who are very knowledgeable, flexible, and responsive.”"
            name="Owen Price"
            role="Head of Finance, Yapily"
          />
        </div>

        <div className="stagger-item">
          <TestimonialCard
            quote="“Moving our billing and pricing to Sequence really helped us bring more automation into our month-end billing runs, saving our team's time and ensuring the accuracy of complex pricing without manual processes. The Sequence team is really helpful and quickly built several features we suggested. The clean, branded invoices are a nice touch for our customers too!”"
            name="Chris Mulligan"
            role="Founder/CEO, Konifir"
          />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;