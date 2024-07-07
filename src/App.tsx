// import "./App.css";
import { Outlet, Route, Routes } from "react-router";

import Shop from "./modules/shop";
import Layout from "./modules/layout";
import Home from "./modules/home";
import Home2 from "./modules/home2";
import AboutUs from "./modules/about-us";
import Ourteam from "./modules/our-team";
import FQA from "./modules/FQA";
import FourOFour from "./modules/404";
import Shopdetails from "./modules/Shop-details";

function App() {
  return (
    <>
      {/* <div>
        <div className="">
          <Header />
        </div>
        <div className=" relative z-10">
          <Nav />
        </div>
        <div className="relative mt-[-70px] ">
          <Banner />
        </div>
        <div className=" overflow-hidden">
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
        </div>
      </div> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="home2" element={<Home2 />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="ourteam" element={<Ourteam />} />
          <Route path="fqa" element={<FQA />} />
          <Route path="404" element={<FourOFour />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shopdetails" element={<Shopdetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
