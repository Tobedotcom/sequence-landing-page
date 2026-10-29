import { useStaggerReveal } from "../hooks/useStaggerReveal";
import "../css/components/revenueStack.css";

const steps = [
  {
    number: "1",
    title: "Build your product catalogue",
    description: "Configure your pricing templates, including usage-based charges.",
  },
  {
    number: "2",
    title: "Configure your workflow",
    description: "Streamline the sales-to-finance handover and manual processes.",
  },
  {
    number: "3",
    title: "Automate billing",
    description: "Automate billing, collections and revenue recognition for every contract.",
  },
  {
    number: "4",
    title: "Invoice customers",
    description: "Provide a transparent billing experience with your own customer portal.",
  },
];

function RevenueStack() {
  const gridRef = useStaggerReveal(200);

  return (
    <section className="revenue-stack">
      <p className="revenue-stack__eyebrow">Get started today</p>
      <h2 className="revenue-stack__title">
        Build your revenue collection stack in days
      </h2>
      <p className="revenue-stack__description">
        Launch a fully integrated workflow and upgrade your manual process.
      </p>

      <div className="revenue-stack__grid" ref={gridRef}>
        <div className="revenue-stack__line" aria-hidden="true" />

        {steps.map((step) => (
          <div className="revenue-step stagger-item" key={step.number}>
            <span className="revenue-step__number">{step.number}</span>
            <h3 className="revenue-step__title">{step.title}</h3>
            <p className="revenue-step__description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RevenueStack;