import React from "react";
import { Outlet } from "react-router";
import Banner from "./component/Banner";
import Callout from "./component/Callout";
import AboutCompany from "./component/AboutCompany";
import Whywebest from "./component/Whywebest";
import Count from "./component/Count";
import Core from "./component/Core";
import PartnerSlider from "./component/PartnerSlider";
import Footer from "./component/Footer";

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
