import "./awards.css";

import logo1 from "./awards/exelon.svg";
import logo2 from "./awards/ey.webp";
import logo3 from "./awards/inc-500.svg";
import logo4 from "./awards/financial.webp";
import logo5 from "./awards/washington-business-journal.png";
import logo6 from "./awards/Builtin.svg";
import logo7 from "./awards/The-Washington-Post.svg";
import logo8 from "./awards/FORRESTER.svg";
import logo9 from "./awards/GARTNER.svg";

const awardsData = [
  { logo: logo1, text: "2024 & 2022 Exelon IT Honor Roll for Diversity, Equity & Inclusion (DEI)", link: "#" },
  { logo: logo2, text: "Entrepreneur of The Year® 2022 Mid-Atlantic Award Imran Aftab", link: "#" },
  { logo: logo3, text: "Fastest growing private companies in America 6x in a row!", link: "#" },
  { logo: logo4, text: "Fastest Growing Companies 2022", link: "#" },
  { logo: logo5, text: "#1 Most Diverse Midsize Company in DC", link: "#" },
  { logo: logo6, text: "Best Places to Work in Washington DC 3x in a row!", link: "#" },
  { logo: logo7, text: "A \"double bottom line\" company", link: "#" },
  { logo: logo8, text: "AI, Product Development, & Customer Experience Expertise", link: "#" },
  { logo: logo9, text: "DevOps, Agile, AI & ML Expertise", link: "#" },
];

const Awards = () => {
  return (
    <section className="expertise-section text-center text-black bg-white py-5">
      <div className="container">
        <h2 className="fw-bold text-left-underline size mb-4">Awards & Recognitions</h2>
        <p className="text-left normal">Recognized by world-class brands as a purpose-driven digital tech partner.</p>
        <a className="text-left bold-underline" href="#">View our full list of awards.</a>
        <div className="row">
          {awardsData.map((award, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <div className="expertise-item d-flex flex-column align-items-center text-center p-3">
                <img src={award.logo} alt={`Award Logo ${index + 1}`} className="icon mb-3 logob" width="60" height="60" />
                <p className="underline"><a href={award.link}>{award.text}</a></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;