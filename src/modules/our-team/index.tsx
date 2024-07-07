import React from "react";
import Banner from "./conponents/Banner";
import Members from "./conponents/Members";
import Consutation from "./conponents/Consutation";
import PartnerSlider from "./conponents/PartnerSlider";
import Footer from "./conponents/Footer";

function index() {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <Members />
      </div>
      <div className="mb-[120px]">
        <Consutation />
      </div>
      <div>
        <PartnerSlider />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default index;
