import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Gird from "./components/Gird";

function Bloggird() {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <Gird />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Bloggird;
