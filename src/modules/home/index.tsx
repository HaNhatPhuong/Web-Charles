import React from "react";
// import "./App.css";

import { Outlet } from "react-router";
import Banner from "./components/Banner";
import Feature from "./components/Feature";
import About from "./components/About";
import FeatureBanner from "./components/FeatureBanner";
import Service from "./components/Service";
import Advice from "./components/Advice";
import OurTeam from "./components/OurTeam";
import Patten from "./components/Patten";
import Consutation from "./components/Consutation";
import PartnerSlider from "./components/PartnerSlider";
import Footer from "./components/Footer";
function Home() {
  return (
    <>
      <div className="relative mt-[70px]">
        <Banner />
      </div>
      <div className=" overflow-hidden">
        <Feature />
      </div>
      <div className="mb-[120px] ">
        <About />
      </div>
      <div className="mb-[120px]">
        <FeatureBanner />
      </div>
      <div className="mb-[120px]">
        <Service />
      </div>
      <div className="mb-[120px]">
        <Advice />
      </div>
      <div className="mb-[120px]">
        <OurTeam />
      </div>
      <div className="mb-[120px]">
        <Patten />
      </div>
      <div className="mb-[120px]">
        <Consutation />
      </div>
      <div className="">
        <PartnerSlider />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
