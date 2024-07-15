import Banner from "./conponents/Banner";
import Consutation from "./conponents/Consutation";
import Members from "./conponents/Members";
import PartnerSlider from "./conponents/PartnerSlider";

function index() {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <Members />
      </div>
      <div className="mb-[120px]">
        <Consutation />
      </div>
      <div>
        <PartnerSlider />
      </div>
    </div>
  );
}

export default index;
