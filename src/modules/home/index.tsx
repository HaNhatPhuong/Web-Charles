// import "./App.css";

import About from "./components/About";
import Advice from "./components/Advice";
import Banner from "./components/Banner";
import Consutation from "./components/Consutation";
import Feature from "./components/Feature";
import FeatureBanner from "./components/FeatureBanner";
import OurTeam from "./components/OurTeam";
import PartnerSlider from "./components/PartnerSlider";
import Patten from "./components/Patten";
import Service from "./components/Service";
function Home() {
  return (
    <>
      <div className="relative mt-[70px]">
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
      <div className="mb-[120px]">
        <OurTeam />
      </div>
      <div className="mb-[120px]">
        <Patten />
      </div>
      <div className="mb-[120px]">
        <Consutation />
      </div>
      <div className="">
        <PartnerSlider />
      </div>
    </>
  );
}

export default Home;
