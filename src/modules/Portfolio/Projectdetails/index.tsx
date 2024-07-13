import React from "react";
import Banner from "./components/Banner";
import Details from "../../Service/Servicedetails/components/Details";
import Detailspro from "./components/Detailspro";
import Footer from "./components/Footer";
import Advice from "./components/Advice";

function Projectdetails() {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <Detailspro />
      </div>
      <div>
        <Advice />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Projectdetails;
