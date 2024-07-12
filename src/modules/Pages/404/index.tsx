import React from "react";
import { Outlet } from "react-router";
import Banner from "./components/Banner";
import Text from "./components/Text";
import Footer from "./components/Footer";

const FourOFour = () => {
  return (
    <div className=" ">
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div>
        <Text />
      </div>
      <div className="mt-[175px]">
        <Footer />
      </div>
    </div>
  );
};

export default FourOFour;
