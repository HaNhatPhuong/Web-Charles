import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function Bloggird() {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Bloggird;
