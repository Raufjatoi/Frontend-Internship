import l1 from "./logos/logo1.svg";
import l2 from "./logos/logo2.svg";
import l3 from "./logos/logo3.svg";
import l4 from "./logos/logo4.svg";
import l5 from "./logos/logo5.svg";
import l6 from "./logos/logo6.svg";
import l7 from "./logos/logo7.svg";
import l8 from "./logos/logo8.svg";
import l9 from "./logos/logo9.png";
import l10 from "./logos/logo10.svg";
import l11 from "./logos/logo11.svg";
import l12 from "./logos/logo12.svg";
import l13 from "./logos/logo13.webp";
import l14 from "./logos/logo14.svg";
import l15 from "./logos/logo15.svg";
import l16 from "./logos/logo16.svg";
import l17 from "./logos/logo17.svg";
import l18 from "./logos/logo18.svg";
import l19 from "./logos/logo19.svg";
import l20 from "./logos/logo20.svg";
import l21 from "./logos/logo21.svg";
import l22 from "./logos/logo22.svg";
import l23 from "./logos/logo23.svg";

import "./company.css";

const logos = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, 
  l11, l12, l13, l14, l15, l16, l17, l18, 
  l19, l20, l21, l22, l23
];

const Company = () => {
  return (
    <> <nav className="bg-yellow py-2">
    <ul className="flex justify-left padding margin space-x-8 font-bold text-black uppercase">
      {["Expertise", "Clients", "Advantages", "Awards", "Insights", "Team"].map((item, index) => (
        <li key={index} className="cursor-pointer">
          {item} <span className="text-lg">↓</span>
        </li>
      ))}
    </ul>
  </nav>

    <section className="company-section text-center text-black bg-white py-5">
      <div className="container">
        <h2 className="fw-bold text-left-underline size">You're in great company</h2>
        <div className="row mt-4">
          {logos.map((logo, index) => (
            <div key={index} className="col-md-2 col-4 mb-3">
              <div className="expertise-item d-flex flex-column align-items-center">
                <img src={logo} alt={`Logo ${index + 1}`} className="icon mb-2" width="80" height="80" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Company;
