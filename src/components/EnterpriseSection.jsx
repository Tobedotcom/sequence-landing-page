import "../css/components/enterpriseSection.css";

import enterpriseImage1 from "../assets/images/enterprise-image-1.png";
import enterpriseImage2 from "../assets/images/enterprise-image-2.png";
import enterpriseImage3 from "../assets/images/enterprise-image-3.png";
import enterpriseImage4 from "../assets/images/enterprise-image-4.png";
import enterpriseImage5 from "../assets/images/enterprise-image-5.png";
import enterpriseImage6 from "../assets/images/enterprise-image-6.png";

function EnterpriseSection() {
  return (
    <section className="enterprise">
      <p className="enterprise__eyebrow">Designed for modern teams</p>
      <h2 className="enterprise__title">
        Consumer grade experience, <br />
        enterprise level security
      </h2>
      <p className="enterprise__description">
        Experience unmatched tools that make every task feel like a breeze.
      </p>

<div className="enterprise__visual">
    <img src={enterpriseImage1} alt="" className="enterprise__image" />
    <img src={enterpriseImage2} alt="" className="enterprise__image" />
    <img src={enterpriseImage3} alt="" className="enterprise__image" />
    <img src={enterpriseImage4} alt="" className="enterprise__image" />
    <img src={enterpriseImage5} alt="" className="enterprise__image" />
    <img src={enterpriseImage6} alt="" className="enterprise__image" />
  </div>
   

    </section>
  );
}

export default EnterpriseSection;
