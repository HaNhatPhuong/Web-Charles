import React from "react";
import { Outlet } from "react-router";
import Banner from "./components/Banner";
import Accordion from "./components/Accordion ";
import PartnerSlider from "./components/PartnerSlider";
import Footer from "./components/Footer";

const FQA = () => {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <Accordion />
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

export default FQA;
