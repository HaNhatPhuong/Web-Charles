import React from "react";
import { Outlet } from "react-router";
import Banner from "./components/Banner";
import Items from "./components/Items";
import Footer from "./components/Footer";

const Shop = () => {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <Items />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
