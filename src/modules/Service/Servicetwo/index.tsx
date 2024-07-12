import React from "react";
import Banner from "./components/Banner";
import Ourservice2 from "./components/Ourservice2";
import FeatureBanner from "./components/FeatureBanner";
import Consutation from "./components/Consutation";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function Servicetwo() {
  return (
    <div>
      <div className="mb-[100px]">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <Ourservice2 />
      </div>
      <div className="mb-[120px]">
        <FeatureBanner />
      </div>
      <div className="mb-[100px]">
        <Consutation />
      </div>
      <div className=" overflow-hidden">
        <Feature />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Servicetwo;
