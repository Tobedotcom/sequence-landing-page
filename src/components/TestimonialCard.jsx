function TestimonialCard({ quote, name, role }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__content">
        <p className="testimonial-card__quote">{quote}</p>

        <div className="testimonial-card__author">
          <p className="testimonial-card__name">{name}</p>
          <p className="testimonial-card__role">{role}</p>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;