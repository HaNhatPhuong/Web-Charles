// import "./App.css";

import { Outlet, useLocation } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <div>
        {pathname !== "/home2" && (
          <>
            <div>
              <Header />
            </div>
            <div className="absolute z-50">
              <Nav />
            </div>
          </>
        )}
        <Outlet />
        {pathname !== "/home2" && (
          <div>
            <Footer />
          </div>
        )}
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
