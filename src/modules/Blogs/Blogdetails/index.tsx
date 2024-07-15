import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Details from "./components/Details";

function Blogdetails() {
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

export default Blogdetails;
