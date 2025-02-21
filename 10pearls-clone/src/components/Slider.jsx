import "./slider.css";
import { useEffect, useState } from "react";
import img from "./slider/global.png";

import slider1 from "./slider/slider1.png";
import slider2 from "./slider/slider2.png";
import slider3 from "./slider/slider3.png";
import slider4 from "./slider/slider4.png";
import slider5 from "./slider/slider5.png";
import slider6 from "./slider/slider6.png";
import slider7 from "./slider/slider7.png";
import slider8 from "./slider/slider8.png";
import slider9 from "./slider/slider9.png";
import slider10 from "./slider/slider10.png";
import slider11 from "./slider/slider11.png";

const cities = ["ISLAMABAD", "KARACHI", "NEW YORK", "CHICAGO", "LONDON", "SAN JOSE", "LAHORE", "LIMA",];

const images = [
  slider1, slider2, slider3, slider4, slider5, slider6, 
  slider7, slider8, slider9, slider10, slider11
];

const Slider = () => {
  return (
    <div className="slider-container">
        <h5  style={{textAlign: "left", color: "white"}} className="text-left">We're a  <span style={{color:"yellow"}} className="yellow">global team  </span> of innovators</h5>
        <p style={{color: "white"}}> Navigate complex digital initiatives with confidence, propelling your journey towards innovation and growth.</p>
      <div className="slider-image-slider">
        <div className="slider-image-track">
          {images.concat(images).map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} />
          ))}
        </div>
        <img src={img} className="rounded float-left size"></img>
        <div className="to-the-img">
          <h2>4 continents</h2>
          <h6>North America , South America, Europe & Asia</h6>
          <div style={{height:"30px"}}></div>
          <h2>1300+</h2>
          <h6>team of global creators & innovators</h6>
          <div style={{height:"30px"}}></div>
          <h2> 40%</h2>
          <h6> of our global workforce are women </h6>
        </div>
      </div>
      <div className="slider-city-slider">
        <div className="slider-city-track">
          {cities.concat(cities).map((city, index) => (
            <h6 key={index}>{city} <span style={{color: "yellow"}}> • </span>   </h6>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
