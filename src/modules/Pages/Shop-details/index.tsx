import React from "react";
import { Outlet } from "react-router";
import Banner from "./components/Banner";
import ProductDetail from "./components/ProductDetail";

const Shopdetails = () => {
  return (
    <div className="">
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div>
        <ProductDetail />
      </div>
    </div>
  );
};

export default Shopdetails;
