import React from "react";
import { Outlet } from "react-router";
import Banner from "./components/Banner";
import Callout from "./components/Callout";
import AboutCompany from "./components/AboutCompany";
import Whywebest from "./components/Whywebest";
import Count from "./components/Count";
import Core from "./components/Core";
import PartnerSlider from "./components/PartnerSlider";
import Footer from "./components/Footer";

const AboutUs = () => {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[70px]">
        <Callout />
      </div>
      <div className="mb-[120px]">
        <AboutCompany />
      </div>
      <div className="mb-[270px]">
        <Whywebest />
      </div>
      <div className="mb-[120px]">
        <Count />
      </div>
      <div>
        <Core />
      </div>
      <div>
        <PartnerSlider />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
