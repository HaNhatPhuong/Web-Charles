import React from "react";
import { Outlet } from "react-router";
import Banner from "./components/Banner";
import ProductDetail from "./components/ProductDetail";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Related from "./components/Related";

const Shopdetails = () => {
  return (
    <div className="">
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <ProductDetail />
      </div>
      <div className="mb-[120px]">
        <Review />
      </div>
      <div className="mb-[100px]">
        <Related />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Shopdetails;
