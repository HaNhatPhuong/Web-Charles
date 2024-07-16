import AboutCompany from "./components/AboutCompany";
import Banner from "./components/Banner";
import Callout from "./components/Callout";
import Core from "./components/Core";
import Count from "./components/Count";
import PartnerSlider from "./components/PartnerSlider";
import Whywebest from "./components/Whywebest";

const AboutUs = () => {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[70px]">
        <Callout />
      </div>
      <div className="mb-[120px]">
        <AboutCompany />
      </div>
      <div className="mb-[300px]">
        <Whywebest />
      </div>
      <div className="mb-[120px]">
        <Count />
      </div>
      <div>
        <Core />
      </div>
      <div>
        <PartnerSlider />
      </div>
    </div>
  );
};

export default AboutUs;
