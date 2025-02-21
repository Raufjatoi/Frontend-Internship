import "./advantage.css";

import logo1 from "./ai.svg";
import logo2 from "./secure.svg";
import logo3 from "./rocket.svg";
import logo4 from "./badge.svg";
import logo5 from "./globe.svg";
import logo6 from "./brain.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
const headings = [
  "AI Experts",
  "Product Mindset",
  "Delivery Excellence",
  "Industry Expertise",
  "Global Scale",
  "Security Implementation"
];

const contents = [
  <p>From concept to production, our <a href="#">AI Launchpad</a> accelerates innovation, taking your idea to proof of concept in 90 days.</p>,
  <p>We deliver outcomes, not just outputs, aligning product development with your business and customer goals.</p>,
  <p>We get sh*t done. Our deep technical expertise and focus on agile, high-velocity delivery ensures satisfaction.</p>,
  <p>We solve business challenges with deep industry insight, ensuring solutions are relevant and impactful.</p>,
  <p>With experts across four continents, we deliver global solutions to drive and scale your digital transformation.</p>,
  <p>Security is at our core. We meet stringent regulatory demands across industries like <a href="#">healthcare</a>, <a href="#">finance</a>, and more.</p>
];

const Advantage = () => {
  return (
    <section className="expertise-section text-center text-white bg-dark py-5">
      <div className="container">
        <h2 className="fw-bold text-left size mb-4">Your unfair <span className="yellow-h2"> Advantage</span></h2>
        <div className="row">
          {logos.map((logo, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="expertise-item d-flex flex-column align-items-center text-center p-3">
                <img src={logo} alt={`Logo ${index + 1}`} className="icon mb-3" width="60" height="60" />
                <h5 className="fw-bold">{headings[index]}</h5>
                <div className="content">{contents[index]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
