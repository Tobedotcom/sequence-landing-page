import workflowImage1 from "../assets/images/workflow-image-1.png";
import workflowImage2 from "../assets/images/workflow-image-2.png";
import workflowImage3 from "../assets/images/workflow-image-3.png";
import workflowImage4 from "../assets/images/workflow-image-4.png";

import "../css/components/workflowSection.css";

import { useStaggerReveal } from "../hooks/useStaggerReveal";

function WorkflowSection() {

     const gridRef = useStaggerReveal();
  return (
    <section className="workflow-section">
      <div className="workflow-section__intro">
        <p className="workflow-section__eyebrow">Tools built for scale</p>

        <h2 className="workflow-section__title">
          Work 10x faster, lower the costs
        </h2>

        <p className="workflow-section__description">
          Sequence gives you a flexible toolkit to scale your revenue
          infrastructure, without building everything in house.
        </p>
      </div>

      <div className="workflow-section__grid" ref={gridRef}>
        <article className="workflow-card stagger-item">
          <div className="workflow-card__visual">
            <img src={workflowImage1} alt="" className="workflow-card__image" />
          </div>

          <div className="workflow-card__content">
            <h3 className="workflow-card__title">
              Capture product pricing in a database
            </h3>

            <p className="workflow-card__description">
              Turn quotes, price and customer usage into data that you can
              search, filter and sync with your data warehouse.
            </p>
          </div>
        </article>

        <article className="workflow-card stagger-item">
          <div className="workflow-card__visual">
            <img src={workflowImage2} alt="" className="workflow-card__image" />
          </div>

          <div className="workflow-card__content">
            <h3 className="workflow-card__title">
              Launch usage based subscriptions and custom pricing
            </h3>

            <p className="workflow-card__description">
              Translate pricing into billing schedules, branded invoices and
              payment collection. Adapt billing to your business model, not the
              other way round.
            </p>
          </div>
        </article>

        <article className="workflow-card stagger-item">
          <div className="workflow-card__visual">
            <img src={workflowImage3} alt="" className="workflow-card__image" />
          </div>

          <div className="workflow-card__content">
            <h3 className="workflow-card__title">
              Create rules and workflows to automate work
            </h3>

            <p className="workflow-card__description">
              From approvals and feature entitlements to renewals and usage
              alerts. Leverage every data record to power automations in your
              business.
            </p>
          </div>
        </article>

        <article className="workflow-card stagger-item">
          <div className="workflow-card__visual">
            <img src={workflowImage4} alt="" className="workflow-card__image" />
          </div>

          <div className="workflow-card__content">
            <h3 className="workflow-card__title">
              Get powerful reporting and data feeds
            </h3>

            <p className="workflow-card__description">
              Export receivables, usage and billing data to your data warehouse
              or sync with Google Sheets in real-time.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default WorkflowSection;
