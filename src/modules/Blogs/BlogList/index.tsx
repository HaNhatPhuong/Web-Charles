import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import List from "./components/List";

function Bloglist() {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <List />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Bloglist;
