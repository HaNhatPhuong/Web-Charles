import React from "react";
import Banner from "./components/Banner";
import Details from "./components/Details";
import Footer from "./components/Footer";

function Servicedtails() {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <Details />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Servicedtails;
