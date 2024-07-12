import React from "react";
import Banner from "./components/Banner";
import Oursolution from "./components/Oursolution";
import FeatureBanner from "./components/FeatureBanner";
import Consutation from "./components/Consutation";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function Serviceone() {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[110px]">
        <Oursolution />
      </div>
      <div className="mb-[120px]">
        <FeatureBanner />
      </div>
      <div className="mb-[120px]">
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

export default Serviceone;
