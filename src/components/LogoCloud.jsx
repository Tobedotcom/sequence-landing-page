import logo1 from "../assets/images/logo-1.svg";
import logo2 from "../assets/images/logo-2.svg";
import logo3 from "../assets/images/logo-3.svg";
import logo4 from "../assets/images/logo-4.svg";
import logo5 from "../assets/images/logo-5.svg";
import logo6 from "../assets/images/logo-6.svg";
import logo7 from "../assets/images/logo-7.svg";
import logo8 from "../assets/images/logo-8.svg";
import logo9 from "../assets/images/logo-9.svg";

import "../css/components/logoCloud.css";

import { useStaggerReveal } from "../hooks/useStaggerReveal";

function LogoCloud() {
  const logoCloudRef = useStaggerReveal();

  return (
    <section className="logo-cloud" ref={logoCloudRef}>
      <p className="logo-cloud__label stagger-item">
        Backed by leading investors and unicorn founders.
      </p>

      <div className="logo-cloud__viewport">
        <div className="logo-cloud__row logo-cloud__row--top stagger-item">
          {[
            logo1,
            logo2,
            logo3,
            logo4,
            logo5,
            logo1,
            logo2,
            logo3,
            logo4,
            logo5,
          ].map((logo, i) => (
            <img src={logo} alt="" key={i} />
          ))}
        </div>

        <div className="logo-cloud__row logo-cloud__row--bottom stagger-item">
          {[logo6, logo7, logo8, logo9, logo6, logo7, logo8, logo9].map(
            (logo, i) => (
              <img src={logo} alt="" key={i} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default LogoCloud;