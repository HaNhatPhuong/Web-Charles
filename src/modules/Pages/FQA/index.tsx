import Accordion from "./components/Accordion ";
import Banner from "./components/Banner";
import PartnerSlider from "./components/PartnerSlider";

const FQA = () => {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <Accordion />
      </div>
      <div>
        <PartnerSlider />
      </div>
    </div>
  );
};

export default FQA;
