import "./yellow.css";
import { useState, useEffect } from "react";

const Yellow = () => {
    const slideranimation = [
        "System Modernization",
        "Data Engineering", 
        "Software Development", 
        "Web App Development", 
        "Frontend Development", 
        "DALL-E Integration"
    ]; 
    
    const [slide, setSlide] = useState(slideranimation[0]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setSlide(slideranimation[index]);
            index = (index + 1) % slideranimation.length;
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="yellow-container">
            <div className="content">
                <h4 className="textPadding"> Let us accelerate your </h4>
                <div className="animated-text">
                    <h4 className="highlight">{slide}</h4>
                </div>
            </div>
            <button className="talk-btn">Let's talk</button>
        </div>
    );
}

export default Yellow;
