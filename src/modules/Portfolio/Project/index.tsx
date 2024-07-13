import React from "react";
import Banner from "./components/Banner";
import Ourcase from "./components/Ourcase";
import Footer from "./components/Footer";

function Project() {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <Ourcase />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Project;
