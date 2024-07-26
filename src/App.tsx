import { Route, Routes, useLocation } from "react-router";
import { useState, useEffect } from "react";

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

// Component để cuộn lên đầu trang khi thay đổi route
const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

// Component Loader để hiển thị thời gian chờ
const Loader = () => (
  <div
    // style={{
    //   backgroundImage: `url(${anhcho})`,
    //   backgroundBlendMode: "cover",
    // }}
    className=" flex justify-center items-center h-screen"
  >
    <img src="/src-img/Wedges@1x-3.0s-200px-200px.svg" alt="" />
  </div>
);

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  // const [currentPage, setCurrentPage] = useState(<Home />);

  useScrollToTop();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Thời gian chờ là 1 giây

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
            <Route path="serviceone" element={<Serviceone />} />
            <Route path="servicetwo" element={<Servicetwo />} />
            <Route path="servicedtails" element={<Servicedtails />} />
            <Route path="project" element={<Project />} />
            <Route path="projectdetails" element={<Projectdetails />} />
            <Route path="bloglist" element={<Bloglist />} />
            <Route path="bloggird" element={<Bloggird />} />
            <Route path="blogdetails" element={<Blogdetails />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<FourOFour />} />
        </Routes>
      )}
    </>
  );
}

export default App;
