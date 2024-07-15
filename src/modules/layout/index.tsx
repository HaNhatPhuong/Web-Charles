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
    </>
  );
}

export default Layout;
