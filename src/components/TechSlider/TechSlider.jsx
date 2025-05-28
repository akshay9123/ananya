import React, { useEffect, useState } from "react";
import "./TechSlider.css";

import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import nodejs from '../../assets/nodejs.png';
import wordpress from '../../assets/wordpress.png';
import shopify from '../../assets/shopify.png';
import php from '../../assets/php.png';

const allSlides = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: javascript },
  { name: "NodeJS", image: nodejs },
  { name: "WordPress", image: wordpress },
  { name: "Shopify", image: shopify },
  { name: "PHP", image: php },
];

const TechSlider = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % allSlides.length);
    }, 4000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const getVisibleSlides = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      visible.push(allSlides[(startIndex + i) % allSlides.length]);
    }
    return visible;
  };

  return (
    <div className="tech-slider">
      {getVisibleSlides().map((slide, index) => (
        <div key={index} className="tech-card">
          <img src={slide.image} alt={slide.name} />
          <p>{slide.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechSlider;
