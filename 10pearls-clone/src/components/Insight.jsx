import "bootstrap/dist/css/bootstrap.min.css";
import "./insight.css";

import img1 from "./cards/img1.jpg";
import img2 from "./cards/img2.jpg";
import img3 from "./cards/img3.jpg";
import img4 from "./cards/img4.jpg";
import img5 from "./cards/img5.jpg";
import img6 from "./cards/img6.jpg";
import img7 from "./cards/img7.jpg";
import img8 from "./cards/img8.jpg";

const insights = [
    { img: img1, category: "ARTIFICIAL INTELLIGENCE", title: "Generative AI for Software Development: Boosting Dev Efficiency" },
    { img: img2, category: "PRODUCT INNOVATION", title: "Launch AI Products with Confidence: Validate Early, Execute Smart" },
    { img: img3, category: "ARTIFICIAL INTELLIGENCE", title: "Putting GenAI to Work for Legacy System Modernization" },
    { img: img4, category: "HEALTHTECH", title: "Next Gen Prior Authorization - Streamlining with Automated Decision Support" },
    { img: img5, category: "ARTIFICIAL INTELLIGENCE", title: "Exploring the Potential of AI Agents Across Industries" },
    { img: img6, category: "ARTIFICIAL INTELLIGENCE", title: "Streamlining Finance Management with Generative AI" },
    {img:img7, category:"DIGITAL TRANSFORMATION", title: "Scaling Digital Transformation with Purpos"},
    {img: img8, category:" ARTIFICIAL INTELLIGENCE", title: "The Transformative Impact of Computer Vision Frameworks in Real Estate"}
];

const groupedInsights = [];
for (let i = 0; i < insights.length; i += 3) {
    groupedInsights.push(insights.slice(i, i + 3));
}

const Insight = () => {
    return (
        <div className="fluid-container mx-auto py-10 lightwhite">
            <h1 className="text-left fix">Insights </h1>
            <div id="insightCarousel" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {groupedInsights.map((group, index) => (
                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                            <div className="flex justify-center gap-4">
                                {group.map((insight, idx) => (
                                    <div key={idx} className="w-1/4 bg-black shadow-lg rounded-lg overflow-hidden border border-gray-200">
                                        <img className="w-full h-64 object-cover" src={insight.img} alt={insight.title} />
                                        <div className="p-5">
                                            <h6 className="text-normal uppercase text-xs">{insight.category}</h6>
                                            <h2 className="text font-semibold text-800 mt-2 yellowg">{insight.title}</h2>
                                            <a href="#" className="text-blue-500 font-medium mt-3 inline-block underlineM">Read more</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev absolute top-1/2 -left-10 transform -translate-y-1/2 bg-gray-800 p-2"
                    type="button" data-bs-target="#insightCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next absolute top-1/2 -right-10 transform -translate-y-1/2 bg-gray-800 p-2"
                    type="button" data-bs-target="#insightCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            <div style={{ height: "30px" }}></div>

        </div>
    );
};

export default Insight;
