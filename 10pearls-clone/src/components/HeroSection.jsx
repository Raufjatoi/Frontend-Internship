import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./hero.css";
import logo from "./bbox.png";
import img from "./img.png";
import logo2 from "./other/i4.png";
import img2 from "./other/i4.jpg";
import logo3 from "./other/i3.png";
import img3 from "./other/i3.jpg";
import img4 from "./other/i5.jpg";
import logo4 from "./other/i5.png";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      category: "Case Study | Energy",
      logo: logo,
      title: "Bboxx",
      description:
        "Advancing renewable energy access by developing a scalable SaaS platform that could be tailored to different markets.",
      image: img,
      ctaText: "Read case study",
    },
    {
      category: "Case Study | AI",
      logo: logo2,
      title: "RelatedFaces",
      description:
        "Delivering faster and more accurate search results with a cutting-edge facial recognition system powered by machine learning.",
      image: img2,
      ctaText: "Read case study",
    },
    {
      category: "Case Study | FinTech",
      logo: logo3,
      title: "PayPal",
      description:
        "Driving user engagement through a unified brand experience and optimized strategy focused on branding and conversion.",
      image: img3,
      ctaText: "Read case study",
    },
    {
      category: "Case Study | Healthcare",
      logo: logo4,
      title: "Amwell",
      description:
        "Improving customer satisfaction and accelerating delivery of new telehealth services with a fully automated software deployment process.",
      image: img4,
      ctaText: "Read case study",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000); // Auto-slide every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image with Shadow Effect */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out shadow-lg"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-700" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-4xl">
        <div className="mb-4">
          <div className="text-white text-sm mb-4">{slides[currentSlide].category}</div>
          <img src={slides[currentSlide].logo} alt="Company logo" className="h-10 mb-8" />
        </div>

        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl shadow-lg">
          {slides[currentSlide].description}
        </p>

        <button className="inline-flex items-center border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 px-4 py-2 shadow-md">
          {slides[currentSlide].ctaText}
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full transition"
        onClick={prevSlide}
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full transition"
        onClick={nextSlide}
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default HeroCarousel;
