import React from "react";
// import "./App.css";

import { Outlet } from "react-router";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
function Layout() {
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div className=" absolute z-50">
          <Nav />
        </div>
        <div>{/* <Footer /> */}</div>

        <Outlet />
      </div>
      {/* <div className=" relative z-10">
        <Service />
      </div> */}
      {/* <div className="relative mt-[-70px] ">
        <Banner />
      </div> */}
      {/* <div className=" overflow-hidden">
        <Feature />
      </div>
      <div className="mb-[120px] ">
        <About />
      </div>
      <div className="mb-[120px]">
        <FeatureBanner />
      </div>
      <div className="mb-[120px]">
        <Service />
      </div>
      <div className="mb-[120px]">
        <Advice />
      </div>
      <div>
        <OurTeam />
      </div> */}
    </>
  );
}

export default Layout;
