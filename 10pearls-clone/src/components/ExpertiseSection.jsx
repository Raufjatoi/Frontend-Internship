import "./Expert.css";

import logo1 from "./brain.svg";
import logo2 from "./computer.svg";
import logo3 from "./chess.svg";
import logo4 from "./enterprise.svg";
import logo5 from "./rocket.svg";
import logo6 from "./secure.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
const expertiseItems = [
  "Artificial Intelligence",
  "Software Development",
  "Strategy & Planning",
  "Enterprise Solutions",
  "New Innovations",
  "Cloud & Security"
];

const ExpertiseSection = () => {
  return (
    <section className="expertise-section text-center text-white bg-dark py-5">
      <div className="container">
        <h2 className="fw-bold text-left">Our Expertise</h2>
        <div className="row mt-4">
          {expertiseItems.map((item, index) => (
            <div key={index} className="col-md-2 col-6 mb-3">
              <div className="expertise-item d-flex flex-column align-items-center">
                <img src={logos[index]} alt={item} className="icon mb-2" width="50" height="50" />
                <p className="mt-2">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
