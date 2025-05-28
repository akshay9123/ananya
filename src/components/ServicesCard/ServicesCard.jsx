import React from "react";
import "./ServicesCard.css";

const ServicesCard = ({ title, icon: Icon, items = [] }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{Icon && <Icon size={40} />}</div>
      <h3 className="service-title">{title}</h3>
      <ul className="service-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesCard;
