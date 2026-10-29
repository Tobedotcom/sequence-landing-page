import "../css/components/systemOfRecord.css";

import systemofrecords from "../assets/images/system-of-record.png";

import { useStaggerReveal } from "../hooks/useStaggerReveal";

function SystemOfRecord() {
  const systemRecordRef = useStaggerReveal();

  return (
    <section className="system-record" ref={systemRecordRef}>
      <div className="system-record__content">
        <p className="system-record__eyebrow stagger-item">System of record</p>

        <h2 className="system-record__title stagger-item">
          Your source of truth for revenue data.
        </h2>

        <p className="system-record__description stagger-item">
          One platform to run every revenue workflow, from contract close to
          revenue recognition.
        </p>

        <a href="#" className="button stagger-item">
          Speak to an Expert →
        </a>
      </div>

      <div className="system-record__visual stagger-item">
        <img src={systemofrecords} alt="System of Records" />
      </div>
    </section>
  );
}

export default SystemOfRecord;
