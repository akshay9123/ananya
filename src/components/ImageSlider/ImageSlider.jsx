import React, { useState, useEffect } from "react";
import "./ImageSlider.css";


import slider1 from "../../assets/1stcodingImage.jpg";
import slider2 from "../../assets/2ndImageWebDevelopment.jpg";

const slides = [
  {
    img: slider1,
    text1: "Web Design, ",
    text2: "SEO Marketing-Your Digital ",
    text3 : "Success Starts Here!",
    text4 : "This Creates a sense of Trust and Action, telling potential"
  },
  {
    img: slider2,
    text1: "Creative Designs. ",
    text2: "Optimized SEO.",
    text3: "Result Driven Marketing",
    text4 : "This Creates a sense of Trust and Action, telling potential"
  },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      <img src={slides[current].img} alt="Slide" className="slider-img blurred-image" />
      <div className="slider-overlay slide-text">
        <h2 style={{color:"white"}}>{slides[current].text1}</h2>
        <h2 style={{color:"orange"}}>{slides[current].text2}</h2>
        <h2 style={{color:"white"}}>{slides[current].text3}</h2>
        <h3 style={{color:"white"}}>{slides[current].text4}</h3>

        <div className="btn">
            <button>Read More</button>
            <button>Contact</button>
        </div>
      </div>
     
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default ImageSlider;