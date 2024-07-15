// import "./App.css";
import { Route, Routes } from "react-router";

import Bloggird from "./modules/Blogs/BlogGird";
import Bloglist from "./modules/Blogs/BlogList";
import Blogdetails from "./modules/Blogs/Blogdetails";
import FourOFour from "./modules/Pages/404";
import FQA from "./modules/Pages/FQA";
import Shopdetails from "./modules/Pages/Shop-details";
import AboutUs from "./modules/Pages/about-us";
import Ourteam from "./modules/Pages/our-team";
import Shop from "./modules/Pages/shop";
import Project from "./modules/Portfolio/Project";
import Projectdetails from "./modules/Portfolio/Projectdetails";
import Servicedtails from "./modules/Service/Servicedetails";
import Serviceone from "./modules/Service/Serviceone";
import Servicetwo from "./modules/Service/Servicetwo";
import Home from "./modules/home";
import Home2 from "./modules/home2";
import Layout from "./modules/layout";
import Contact from "./modules/Contact";

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
          {/*  */}
          <Route path="/" element={<Home />} />
          <Route path="home2" element={<Home2 />} />
          {/* PAGES */}
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="ourteam" element={<Ourteam />} />
          <Route path="fqa" element={<FQA />} />
          <Route path="404" element={<FourOFour />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shopdetails" element={<Shopdetails />} />
          {/* SERVICE */}
          <Route path="serviceone" element={<Serviceone />} />
          <Route path="servicetwo" element={<Servicetwo />} />
          <Route path="servicedtails" element={<Servicedtails />} />
          {/*PROJECT  */}
          <Route path="project" element={<Project />} />
          <Route path="projectdetails" element={<Projectdetails />} />
          {/* BLOGS */}
          <Route path="bloglist" element={<Bloglist />} />
          <Route path="bloggird" element={<Bloggird />} />
          <Route path="blogdetails" element={<Blogdetails />} />
          {/* CONTACT */}
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route element={<Home2 />} />
      </Routes>
    </>
  );
}

export default App;
