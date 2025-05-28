import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { MdDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import "./App.css";
import ServicesCard from "./components/ServicesCard/ServicesCard";
import Footer from "./components/Footer/Footer";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

const App = () => {
  return (
    <>
      <div className="nav-top-element">
        <div className="nav-top-element-left">
          <div className="mail"><HiOutlineMail/> deepak.agarwal@aannya.com</div>
          <div className="location"><IoLocationOutline />
            Office number 01 (Basement, Block H, Building no 169, Sector 63,
            Noida, Uttar Pradesh 201301
          </div>
        </div>

        <div className="nav-top-element-right">
          <ul>
            <li>Carrer</li>
            <li>Faq</li>
            <li>Pay</li>
          </ul>
        </div>
      </div>
      <Navbar />

      <div className="services-section">
        <h2>Services that are provided by the company</h2>
        <p>Amazing website design and imaginative digital services.</p>
      </div>

      <div className="services">
        <ServicesCard
        title="Web Design"
        icon={MdDesignServices}
        items={[
          "E-commerce strategy",
          "Custom design",
          "Front-End development",
          "Business intelligence",
        ]}
      />

      <ServicesCard
        title="Web Development"
        icon={FaCode}
        items={[
          "PHP Development",
          "Wordpress Development",
          "CMS Development",
          "API Intigration",
          "Portal Development",
          "Payment Gateway"
        ]}
      />
      <ServicesCard
        title="Graphic Design"
        icon={FaPaintBrush}
        items={[
          "Logo Design",
          "Brochure design",
          "Banner design"
        ]}
      />

      <ServicesCard
        title="Digital Marketing"
        icon={HiOutlineSpeakerphone}
        items={[
          "SEO",
          "SMO",
          "PPC",
          "GMB",
          "Content Writing"
        ]}
      />
      </div>

      <Footer />
    </>
  );
};

export default App;
