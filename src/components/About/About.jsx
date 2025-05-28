import React from "react";
import "./About.css";
import aboutImage from "../../assets/aboutImage.jpg"; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h2>AANNYA IT Consulting and Software.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nemo numquam atque odio, enim accusantium, laudantium impedit quia officiis consectetur, vitae voluptatem nulla reiciendis dolorem id itaque labore iste consequatur esse? Nemo asperiores cum aliquam sequi provident, adipisci velit numquam deleniti nihil porro ipsam odio nesciunt nam vero? Et provident enim dignissimos, dolorem reiciendis, molestias quasi magnam minima, nesciunt quae mollitia alias architecto quaerat! Maiores eligendi ipsam accusamus aliquam deserunt iste nemo dolorem natus minima repellendus veniam ducimus, nobis, at repudiandae labore ab. Atque recusandae laudantium hic sequi corrupti, vitae error in iusto. Dignissimos, dolorum? Optio doloribus repellat corporis perspiciatis.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>
      <div className="about-right">
        <img src={aboutImage} alt="About PR Webscrew" />
      </div>
    </div>
  );
};

export default About;
